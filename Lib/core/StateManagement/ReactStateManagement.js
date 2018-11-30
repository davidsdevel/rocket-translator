const StateManagement = require("./StateManagement");

/**
 * Class React State Management
 * @extends StateManagement
 */
class ReactStateManagement extends StateManagement {
	constructor(){
		super();
		this.condStates = new Array();
		this.loopsState = new Array();
		this.prerenderComputed = new Array();
		this.condMapped = false;
		this.loopsMapped = false;
	}
	/**
	 * Set React Components
	 * 
	 * @description Set Components Imports to String Template
	 * @public
	 * @return {string}
	 */
	setReactComponents(){
		let components = "";
		if (this.components.length > 0) {
			this.components.forEach(e=>{
				components += `import ${e} from "~/components/${e}"\n`; //Add Import for each Component Value
			})
		}
		return components;
	}
	/**
	 * Set React Components
	 * 
	 * @description Set Components Imports to String Template
	 * @public
	 * @return {string}
	 */
	setReactStateToTemplate(){
		//Empty vars to append into template
		let states = "";
		let computed = "";
		let methods = "";
		let bindMethods = "";
		let bindComputeds = "";
		let watchers = "";
		let inputHandler = "";

		//Map States
		if (this.states.length > 0) {
			var _mappedStates = {}; //Empty Object to set States
			this.states.forEach(e=>{
				if (typeof e === "object") {
					_mappedStates[e.key] = e.value;
				} else if (typeof e === "string"){
					_mappedStates[e.replace(/(\"|\')/g, "")/*Delete String Quotes*/] = "";
				}
			})
			states = `\n\t\tthis.state = ${this._JSONPrettify(_mappedStates)};`; //Set States
		}
		//Map Computeds
		if (this.computed.length > 0) {
			let mappedComputed = this.computed.map(e=>{
				this.prerenderComputed.push(`var ${e.name} = this.${e.name}();`);
				return `${e.name}()${e.content}`;
			});
			computed = "\n\t"+mappedComputed.join("\n\t");

			let mappedBindComputeds = this.computed.map(e=>{
				let sliced = e.name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			})
			bindComputeds = "\n\t\t"+mappedBindComputeds.join("\n\t\t");
		}
		//Methods
		if(this.methods.length > 0){
			let mappedMethods = this.methods.map(e=>{
				return e.name+e.content;
			})
			methods = "\n\t"+mappedMethods.join("\n\t");

			let mappedBindMethods = this.methods.map(e=>{
				let sliced = e.name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			})
			bindMethods = "\n\t\t"+mappedBindMethods.join("\n\t\t");
		}
		if (this.watchers.length > 0) {
			let mappedWatchers = this._filterJS(this.watchers, "r").map((e,i)=>{
				let isState = false;
				let isProp = false;

				this.states.forEach(state=>{
					if (e.name === state || e.name === state.key) {
						isState = true;
					}
				})
				if (!isState) {
					this.props.forEach(prop=>{
						if (prop === e.name) {
							isProp = true;
						}
					})
				}

				let bifurcacion = "";
				if (i === 0) {
					bifurcacion = "if";
				} else {
					bifurcacion = "else if";
				}
				let stateOrProp = "";
				if (isState) {
					stateOrProp = "state.";
				} else if (isProp) {
					stateOrProp = "prop.";
				}
				let final = `${bifurcacion} (${stateOrProp + e.name}) ${e.content.split(/\n/).join("\n\t").replace(/^{/, "{\n\t\t\tlet "+ e.params+" = "+stateOrProp+e.name+";").replace(/}$/, "}")}`;
				return final;
			})
			watchers = `\n\tcomponentDidUpdate(prop, state){\n\t\t${mappedWatchers.join(" ")}\n\t}`;
		}
		if (this.inputs) {
			inputHandler = `
	inputHandler({target}){
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}`;
		}

		let mainTemplate = 	
	`constructor(${this.props.length > 0 ? "props": ""}) {
		super(${this.props.length > 0 ? "props": ""});${states}${bindMethods}${watchers ? "\n\t\tthis.componentDidUpdate = this.componentDidUpdate.bind(this);" : ""}${bindComputeds}
	}${computed}${methods}${inputHandler}${watchers}`;
		if (!states && !computed && !methods && !watchers && this.props.length === 0) {
			 mainTemplate = "";
		}
		return mainTemplate
	}
	setReactFilterHTMLState(html){
		if (!this.condMapped) {
			this.cond.forEach(e=>{
				let id = "";
				for (var i = 0; i <= 3; i++) {
					id += new String(Math.floor(Math.random()*10));
				}
				html = html.replace(new RegExp(`(\t)*<if cond=('|")${e.cond}('|")>(\n|\r|\r\n)${e.if}(\n|\r|\r\n)(\t)*</if>(\r|\n|\r\n)`, "m"), `\t{data_${id}}`);
				html = html.replace(new RegExp(`(\t)*<else>(\n|\r|\r\n)${e.else}</else>`, "m"), "");
		
				this.condStates.push({
					id,
					cond:e.cond,
					if:e.if.replace(/^\t*/, ""),
					else:e.else.replace(/^\t*/, "").replace(/(\n|\r|\r\n)(\t)*$/, "")
				});
			})
			this.condMapped = true;
		}
		if (!this.loopsMapped){
			this.loops.forEach(e=>{
				let id = "";
				for (var i = 0; i <= 3; i++) {
					id += new String(Math.floor(Math.random()*10));
				}
				html = html.replace(new RegExp(`<for val=(\\'|\\").*(\\'|\\")>(\\n|\\r|\\r\\n)${e.content.replace(/\(/g, ".").replace(/\)/g ,".").replace(/\t/g, "\\t")}<\\/for>`), `{data_${id}}`);
				this.loopsState.push({
					id,
					state:e.state,
					value:e.value,
					content:e.content.replace(/(\n|\r|\r\n|\t)/g, "")
				});
			})
			this.loopsMapped = true;
		}
		html = html
			.replace(/"/g, "'")
			.split(/\{(?=\w*)/g)
			.map((e, i)=>{
				if (e) {
					let str;
					if (i === 0) {
						str = e;
					} else if (e.match(/prop/)) { 
						str = "{this.props."+e.replace(/(\s-.*\})/g, "}");
					}else if (e.match(/computed/)) {
						str = "{"+e.replace(/(\s-.*\})/g, "}");
					} else if (e.match(/state/)){
						str = "{this.state."+e.replace(/(\s-.*\})/g, "}");
					} else {
						str = "{"+e
					}
					return str;
				}
			})
			.join("")
			.split(/:(?=\w*='\w*)/g)
			.map((e, i)=>{
				let valueToReturn;
				if (i !== 0) {
					if(e.match(/^\w*='\w*'/)){
						let isState = false;
						let toCompare = e.match(/='\w*(?=')/)[0];
						this.states.forEach(state=>{
							state = typeof state === "object" ? state.key : state;
							if (toCompare.match(new RegExp(state))) {
								isState = true;
							}
						})
						valueToReturn = e.replace(/'(?=\w*)/, isState ? "{this.state." :  "{").replace(/('|\s\-.*')(?=\s|\/)/, "}");
					} else if (e.match(/^\w*='\w*\s*\-\s*\w*'/)) {
						let isState = false;
						let toCompare = e.match(/^\w*='\w*/g)[0];
						this.states.forEach(state=>{
							state = typeof state === "object" ? state.key : state;
							if (toCompare.match(new RegExp(state))) {
								isState = true;
							}
						})
						valueToReturn = e.replace(/'(?=\w*)/, isState ? "{this.state." : "{").replace(/''/, "'}").replace(/}'/, "}}");
					} else if (e.match(/^\w*='\w*\s*\?\s*(\{|\')/)) {
						let isState = false;
						let toCompare = e.match(/\w*(?=\s*\?)/)[0];
						this.states.forEach(state=>{
							state = typeof state === "object" ? state.key : state;
							if (toCompare.match(new RegExp(state))) {
								isState = true;
							}
						});
						valueToReturn = e.replace(/'(?=\w*)/, isState ? "{this.state." : "{").replace(/''/, "'}").replace(/}'/, "}}");
					}
				} else {
					valueToReturn = e;
				}
				return valueToReturn;
			})
			.join("")
			.replace(/\s\-\s.*'/g, "}")
			.split(/on(?=\w*='\w*\(\)')/)
			.map((e, index)=>{
				if (index === 0) {
					return e;
				} else {
					
					return "on" + e[0].toUpperCase() + e.slice(1)
						.replace(/'(?=\w*)/, "{this.")
						.replace(/\(\)'(?=\s|\/|\>)/, "}");
				} 
			})
			.join("")
			.split(/<(?=input|textarea|select)/g)
			.map(e=>{
				let name = e.match(/name=("|')\w*("|')/);
				let newName = "";
				if (name) {
					newName = `onChange={this.inputHandler.bind(this)}`;
				}
				let replaced;
				if (e.match(/input/)) {
					replaced = e.replace("input", `input ${newName}`);
				} else if (e.match(/textarea/)) {
					replaced = e.replace("textarea", `textarea ${newName}`);
				} else if (e.match(/select/)) {
					replaced = e.replace("select", `select ${newName}`);
				} else {
					replaced = e;
				}
				return replaced;
			})
			.join("<")
			.replace(/class(?=='|={)/g, "className")
			.replace(/for(?=='|={)/g, "htmlFor");

			return html
	}
	setPrerenderLogical(){
		let cond = this.condStates.map(e=>{
			return `var data_${e.id};\n\t\tif(this.state.${e.cond}) {\n\t\t\tdata_${e.id} = ${e.if};\n\t\t} ${e.else ? `else {\n\t\t\tdata_${e.id} = ${e.else}\n\t\t}\n\t\t`:""}`
		})
		let loops = this.loopsState.map(e=>{
			return `var data_${e.id} = this.state.${e.state}.map(${e.value}=>{\n\t\t\treturn ${this.setReactFilterHTMLState(e.content)}\n\t\t}\n\t\t`
		})
		return `${cond ? cond.join("") : ""}${loops ? loops.join(""):""}${this.prerenderComputed.length > 0 ? this.prerenderComputed.join(""):""}`;
	}
}

module.exports = ReactStateManagement