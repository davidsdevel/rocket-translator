const StateManagement = require("./StateManagement")

class VueStateManagement extends StateManagement {
	constructor(){
		super();
	}
	//------------------------------------------------------------------------------
	/**
	 * Vue Methods
	 *
	 */
	getVueDataTemplate(componentName){
		return this._setVueDataTemplate(componentName);
	}
	setVueFilterHTMLState(html){

		//Quotes Replace
		let replacedQuotes = html.replace(/(")/g, "'");

		//Parse Data
		let addOpenBraces = replacedQuotes
			.split(/\{(?=\w*)/g)
			.map(e=>{
				if (e) return e.replace(/(\s-.*\}|\})/g, "}}");
			})
			.join("{{");
		let replaceTypeValueData = addOpenBraces.replace(/\s\-\s(\w*|(')*\w*(')*)(?=\s|\/|\>)/g, "'");
		let addEventToVue = replaceTypeValueData.replace(/on(?=\w*=\'\w*\(\)')/g, "@");
		let addInputHandler = addEventToVue
			.split(/<(?=input|textarea|select)/g)
			.map(e=>{
				let name = e.match(/name=("|')\w*("|')/);
				let newName = "";
				if (name) {
					newName = `v-model='${name[0].match(/'\w*(?=')/)[0].slice(1)}'`
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
			.join("<");
		let bindDirectivesReplaced = addInputHandler
			.split(/:(?=\w*=)/)
			.map((e, i)=>{
				if (i !== 0) return e.replace(/''/, "'\"").replace("'", "\"");
				else return e;
			})
			.join(":");

		let condParsed = bindDirectivesReplaced
			.replace(/(\/if|\/else)(?=>)/g, "/template")
			.replace(/if\s*cond=/g, "template v-if=\"")
			.replace(/else(?=>)/g, "template v-else")
			.replace(/''(?=.*>)/g, "'\"");

		let loopParse = condParsed
			.replace(/for val=(?=.*>)/g, "template v-for=")
			.replace(/\/for(?=>)/g, "/template")
		return loopParse;
	}

	_setVueDataTemplate(componentName){
		let states = "";
		let computed = "";
		let methods = "";
		let components = "";
		let importComponents = "";
		let watchers = "";
		let props = "";
		//States
		if (this.states.length > 0) {
			var _mappedStates = {};

			this.states.forEach(e=>{
				if (typeof e === "object") {
					_mappedStates[e.key] = e.value;
				} else if (typeof e === "string"){
					_mappedStates[e.replace(/(\"|\')/g, "")] = "";
				}
			})
			states = `\n\tdata(){\n\t\treturn ${this._JSONPrettify(_mappedStates)}\n\t},`;
		}
		//Components
		if (this.components.length > 0) {
			components = `\n\tcomponents:{\n\t\t${this.components.join(', \n\t\t')}\n\t},`;
			this.components.forEach(e=>{
				importComponents += `import ${e} from "~/components/${e}"\n`;
			})
		}
		//Computeds
		if (this.computed.length > 0) {
			let mappedComputed = this.computed.map(e=>{
				return `${e.name}() ${e.content},\n`;
			})
			computed = `\n\tcomputed:{\n\t\t${mappedComputed.join("")}\t},`;
		}
		//Methods
		if (this.methods.length > 0){
			let mappedMethods = this.methods.map(e=>{
				return e.name+e.content+",\n";
			})
			methods = `\n\tmethods:{\n\t\t${mappedMethods.join("\t\t")}\t}`;
		}
		//Watchers
		if (this.watchers.length > 0) {
			let mappedWatchers = this._filterJS(this.watchers, "v").map(e=>{
				return `${e.funcName} ${e.content}`;
			})
			watchers = `\n\twatch{\n\t\t${mappedWatchers.join("\n\t\t")}\n\t}`;
		}
		//Props
		if (this.props.length > 0) {
			let mappedProps = this.props.map((e, i)=>{
				let comma;
				i === this.props.length - 1 ? comma = "" : comma = ","
				return `\n\t\t${e}:{\n\t\t\ttype:String,\n\t\t\trequired:true,\n\t\t\tdefault:"Hola Mundo"\n\t\t}${comma}`
			})
			props = `\n\tprops:{${mappedProps.join()}\n\t},`
		}

		let mainTemplate = 	`${importComponents}\nexport default {\n\tname:${componentName || "MyComponent"},${components}${props}${states}${computed}${methods}${watchers}\n}`;
		if (states ||
			computed ||
			methods ||
			components ||
			watchers ||
			props
		) {
			return mainTemplate
		} else {
			return ""
		}
	}
}
module.exports = VueStateManagement