const StateManagement = require("./StateManagement");

/**
 * Class React State Management
 * 
 * @class
 * @extends StateManagement
 */
class ReactStateManagement extends StateManagement {
	constructor(){
		super();
		this.preRender = new Array();

		//Arroy to map on prerender logical
		this.prerenderComputed = new Array();
		this.condWasMapped = false;
		this.loopsWasMapped = false;
	}
	/**
	 * Get Components To Import (getter)
	 * 
	 * @description Set Components Imports to String Template
	 * @public
	 * @return {string}
	 */
	get importComponents(){
		let components = "";
		if (this.components.length > 0) {
			this.components.forEach(({name, type, path}) => {
				if (type === "internal")
					components += `import ${name} from "./components/${name}"\n`; //Add Import for each Component Value
				else if (type === "external")
					components += `import ${name} from "${path}"`;
			});
		}
		return components;
	}
	/**
	 * Get Component Data (getter)
	 * 
	 * @public
	 * @return {string}
	 */
	get componentData(){
		const haveStates = this.states.length > 0;
		const haveLifecycles = this.lifecycle.length > 0;
		const haveComputed = this.computed.length > 0;
		const haveMethods = this.methods.length > 0;
		const haveWatchers = this.watchers.length > 0;
		
		var componentDidUpdateContent = "";

		//Empty vars to append into template
		var states = "";
		var lifecycle = "";
		var computed = "";
		var methods = "";
		var bindMethods = "";
		var bindComputeds = "";
		var bindLifecycles = "";
		var watchers = "";
		var inputHandler = "";

		//Map States
		if (haveStates) {
			var mappedStates = {}; //Empty Object to set States
			this.states.forEach(state => {
				const isObject = typeof state === "object";

				const stateName =  isObject ? state.key : state.replace(/("|')/g, "");
				
				mappedStates[stateName] = isObject ? state.value : "";
			});
			states = `\nthis.state = ${this._JSONPrettify(mappedStates)};`; //Set States
		}
		if (haveLifecycles) {
			var mappedBindLifecycles = [];
			const mappedLifecycle = this.lifecycle.map(({name, content}) => {
				if (haveWatchers && name === "componentDidUpdate") {
					componentDidUpdateContent = content
						.replace(/(.*)\s*{/, "")
						.replace(/}$/, "");

					return "";
				}
				mappedBindLifecycles.push(`this.${name} = this.${name}.bind(this);`);

				return `${name}${content}\n`;
			});

			lifecycle = `${mappedLifecycle.join("\n")}\n`;
			
			bindLifecycles = `\n${mappedBindLifecycles.join("\n")}`;
		}

		//Map Computed Properties
		if (haveComputed) {
			const mappedComputed = this.computed.map(({name, content}) => {
				this.prerenderComputed.push(`var ${name} = this.${name}();\n`);
				return `${name}${content}`;
			});
			computed = `${mappedComputed.join("\n")}\n`;

			//Add to bind methods
			const mappedBindComputed = this.computed.map(({name}) => {
				const sliced = name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			});
			bindComputeds = `\n${mappedBindComputed.join("\n")}`;
		}

		//Methods
		if(haveMethods){
			const mappedMethods = this.methods.map(({name, content}) => {
				return `${name}${content}`;
			});
			methods = `${mappedMethods.join("\n")}\n`;

			//Add to bind methods
			const mappedBindMethods = this.methods.map(({name}) => {
				const sliced = name.replace("()", "").replace(/^async\s*/, "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			});
			bindMethods = `\n${mappedBindMethods.join("\n")}`;
		}

		//Map State Watchers
		if (haveWatchers) {
			const filteredJs = this._filterJS(this.watchers, "r");
			const watchToMap = filteredJs.concat([{name: "rocketComponentDidUpdate", content:componentDidUpdateContent}]);
			//Filter Content And Map Watchers
			const mappedWatchers = watchToMap
				.map(({name, content}, i) => {
					
					if (name === "rocketComponentDidUpdate")
						return content;
					
					const param = content.match(/\w*(?=\s*(\)|=>))/)[0];
					content = content.replace(/.*(?={)/, "");
					var stateOrProp = "";

					//Watch if is a state
					if (this.isState(name))
						stateOrProp = "state.";
					else if (this.isProp(name))
						stateOrProp = "prop.";

					const conditional = i === 0 ? "if" : "else if";
					return `${conditional} (${stateOrProp + name}) ${content.split(/\n/).join("\n").replace(/^{/, `{\nlet ${param} = ${stateOrProp + name};`)}`;
				});
			watchers = `componentDidUpdate(prop, state){\n${mappedWatchers.join(" ")}\n}`;
		}

		//Map Input Handler
		if (this.handleInputs && !global.RocketTranslator.ignoreInputName) {
			inputHandler = "inputHandler({target}){\nconst {name, type} = target;\nconst value = type === 'checkbox' ? target.checked : target.value;\nthis.setState({\n[name]: value\n});\n}\n";
		}
		//If don't have data return empty
		if (
			!states &&
			!computed &&
			!methods &&
			!watchers &&
			this.props.length === 0
		) {
			return "";
		}

		return `constructor() {\nsuper();${states}${bindMethods}${(this.handleInputs && !global.RocketTranslator.ignoreInputName) ? "\nthis.inputHandler = this.inputHandler.bind(this);" : ""}${bindLifecycles}${watchers ? "\nthis.componentDidUpdate = this.componentDidUpdate.bind(this);" : ""}${bindComputeds}\n}\n${lifecycle}${computed}${methods}${inputHandler}${watchers}`;
	}
	/**
	 * Filter HTML
	 *
	 * Filter HTML String and return with React Syntax
	 * 
	 * @public
	 * @param {string} html
	 *
	 * @return {string}
	 */
	filterHTML(html){
		const {html: HTML, loops, conditionals} = this._generateJSX(html);

		this.preRender = this.prerenderComputed.concat(loops, conditionals).join("\n");

		return HTML;
	}
}

module.exports = ReactStateManagement;
