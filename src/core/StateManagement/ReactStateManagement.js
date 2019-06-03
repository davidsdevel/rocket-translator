import StateManagement from "./StateManagement";

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
			this.components.forEach(e => {
				components += `import ${e} from "./components/${e}"\n`; //Add Import for each Component Value
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
		let states = "";
		let lifecycle = "";
		let computed = "";
		let methods = "";
		let bindMethods = "";
		let bindComputeds = "";
		let bindLifecycles = "";
		let watchers = "";
		let inputHandler = "";

		//Map States
		if (haveStates) {
			var mappedStates = {}; //Empty Object to set States
			this.states.forEach(state => {
				let isObject = typeof state === "object";

				let stateName =  isObject ? state.key : state.replace(/("|')/g, "");
				
				mappedStates[stateName] = isObject ? state.value : "";
			});
			states = `\n\t\tthis.state = ${this._JSONPrettify(mappedStates)};`; //Set States
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

				return `${name}${content}\n\t`;
			});

			lifecycle = `${mappedLifecycle.join("\n\t")}\n\t`;
			
			bindLifecycles = `\n\t\t${mappedBindLifecycles.join("\n\t\t")}`;
		}

		//Map Computed Properties
		if (haveComputed) {
			let mappedComputed = this.computed.map(({name, content}) => {
				this.prerenderComputed.push(`var ${name} = this.${name}();\n\t\t`);
				return `${name}${content}`;
			});
			computed = `${mappedComputed.join("\n\t")}\n\t`;

			//Add to bind methods
			let mappedBindComputed = this.computed.map(({name}) => {
				let sliced = name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			});
			bindComputeds = `\n\t\t${mappedBindComputed.join("\n\t\t")}`;
		}

		//Methods
		if(haveMethods){
			let mappedMethods = this.methods.map(({name, content}) => {
				return `${name}${content}`;
			});
			methods = `${mappedMethods.join("\n\t")}\n\t`;

			//Add to bind methods
			let mappedBindMethods = this.methods.map(({name}) => {
				let sliced = name.replace("()", "").replace(/^async\s*/, "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			});
			bindMethods = `\n\t\t${mappedBindMethods.join("\n\t\t")}`;
		}

		//Map State Watchers
		if (haveWatchers) {
			const filteredJs = this._filterJS(this.watchers, "r");
			const watchToMap = filteredJs.concat([{name: "rocketComponentDidUpdate", content:componentDidUpdateContent}]);
			//Filter Content And Map Watchers
			let mappedWatchers = watchToMap
				.map(({name, content}, i) => {
					
					if (name === "rocketComponentDidUpdate")
						return content;
					
					const param = content.match(/\w*(?=\s*(\)|=>))/)[0];
					content = content.replace(/.*(?={)/, "");
					let stateOrProp = "";

					//Watch if is a state
					for (let i = 0; i < this.states.length; i++) {
						if (stateOrProp === "state.")
							break;

						const stateName = typeof this.states[i] === "object" ? this.states[i].key : this.states[i];
						if (name === stateName)
							stateOrProp = "state.";
					}

					if (!stateOrProp) {
					//Watch if is a prop
						for (let i = 0; i < this.states.length; i++) {
							if (stateOrProp === "prop.")
								break;

							const stateName = typeof this.states[i] === "object" ? this.states[i].key : this.states[i];
							if (name === stateName)
								stateOrProp = "prop.";
						}
					}

					let conditional = i === 0 ? "if" : "else if";
					return `${conditional} (${stateOrProp + name}) ${content.split(/\n/).join("\n\t").replace(/^{/, `{\n\t\t\tlet ${param} = ${stateOrProp + name};`)}`;
				});
			watchers = `componentDidUpdate(prop, state){\n\t\t${mappedWatchers.join(" ")}\n\t}`;
		}

		//Map Input Handler
		if (this.handleInputs && !global.RocketTranslator.ignoreInputName) {
			inputHandler = "inputHandler({target}){\n\t\tlet {name, type} = target;\n\t\tlet value = type === 'checkbox' ? target.checked : target.value;\n\t\tthis.setState({\n\t\t\t[name]: value\n\t\t});\n\t}\n\t";
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

		return `constructor() {\n\t\tsuper();${states}${bindMethods}${(this.handleInputs && !global.RocketTranslator.ignoreInputName) ? "\n\t\tthis.inputHandler = this.inputHandler.bind(this);" : ""}${bindLifecycles}${watchers ? "\n\t\tthis.componentDidUpdate = this.componentDidUpdate.bind(this);" : ""}${bindComputeds}\n\t}\n\t${lifecycle}${computed}${methods}${inputHandler}${watchers}`;
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

export default ReactStateManagement;
