const StateManagement = require("./StateManagement");
const Events = require("../../const/Events");
const {transform} = require("@babel/core");

/**
 * Vue State Management
 *
 * Class to handle the Vue Data
 *
 * @class
 * @extends StateManagement
 *
 */
class VueStateManagement extends StateManagement {
	constructor() {
		super();
	}
	/**
	 * Component Data
	 * 
	 * Return the filtered component data
	 *
	 * @public
	 * @param {String} componentName
	 * @param {String} html
	 *
	 * @return {String}
	 */
	componentData(componentName, html){
		return this._mapComponentData(componentName, html);
	}

	/**
	 * Filter HTML
	 *
	 * Filter and return the html with the Vue Syntax
	 *
	 * @public
	 * @param {String} html
	 * @return {String}
	 *
	 */
	filterHTML(html){
		//Quotes Replace to double quotes
		let replacedQuotes = html.replace(/(')/g, "\"");

		//Parse open braces
		let addOpenBraces = replacedQuotes
			.split(/\{(?=\w*)/g)
			.map(content => {
				if (content) return content.replace(/(\s*-.*\}|\})/g, "}}");
			})
			.join("{{");
		
		//Parsing Event Tags "on"
		let addEventToVue = addOpenBraces
			.replace(new RegExp(`on(?=('|")${Events.join("|")})`), "@");

		/*----------Parsing Inputs Tags----------*/
		
		/*
		* If have the attr "name" this is replace whit the v-model directive
		*/

		let inputTag = addEventToVue
			.split(/<input/g)
			.map((content, i) => {
				if (i > 0) {
					let nameTag = content.match(/name=("|')\w*("|')/);
					var vModelDirective = "";

					if (nameTag && !global.RocketTranslator.ignoreInputName)
						vModelDirective = `v-model='${nameTag[0].match(/"\w*(?=")/)[0].slice(1)}'`;
					
					return content.replace(" ", ` ${vModelDirective}`);
				} 
				return content;
			})
			.join("<input");

		let textareaTag = inputTag
			.split(/<textarea/g)
			.map((content, i) => {
				if (i > 0) {
					let nameTag = content.match(/name=("|')\w*("|')/);
					var vModelDirective = "";
					
					if (nameTag && !global.RocketTranslator.ignoreInputName)
						vModelDirective = `v-model='${nameTag[0].match(/"\w*(?=")/)[0].slice(1)}'`;
					
					return content.replace(" ", ` ${vModelDirective}`);
				} 
				return content;
			})
			.join("<textarea");

		let selectTag = textareaTag
			.split(/<select/g)
			.map((content, i) => {
				if (i > 0) {
					let nameTag = content.match(/name=("|')\w*("|')/);
					var vModelDirective = "";
					
					if (nameTag && !global.RocketTranslator.ignoreInputName)
						vModelDirective = `v-model='${nameTag[0].match(/"\w*(?=")/)[0].slice(1)}'`;
					
					return content.replace(" ", ` ${vModelDirective}`);
				} 
				return content;
			})
			.join("<select");

		const condParsed = selectTag
			.split(/<(?=if.*>|else.*>)/)
			.map((cond, i) => {
				if (i > 0) {
					const condTagName = cond.match(/^\w*(-\w*)*/)[0];
					const tagRegExp = /\s*tag="\w*(-\w*)*"/;
					var tagName = "template";

					if (tagRegExp.test(cond)) 
						tagName = cond.match(tagRegExp)[0]
							.replace(/\s*tag=/, "")
							.replace(/'|"/g, "");

					return cond.replace(new RegExp(`${condTagName} cond="(?=.*>)`, "g"), `${tagName} v-${condTagName}="`)
						.replace(`</${condTagName}>`, `</${tagName}>`)
						.replace(`${condTagName}>`, `${tagName} v-${condTagName}>`)
						.replace(tagRegExp, "")
						.replace(/"\s*"/, "\"'");
				}
				return cond;
			})
			.join("<");

		const closeCondTag = condParsed
			.split(/<\/(?=if.*>|else.*>)/)
			.map((cond, i) => {
				if (i > 0) {
					const condTagName = cond.match(/^\w*(-\w*)*/)[0];

					return cond.replace(condTagName, "template");
				}
				return cond;
			})
			.join("</");

		//Parsing the bind attr with the v-bind directive
		let bindDirectivesReplaced = closeCondTag
			.split(/:(?=\w*=)/)
			.map((content, i) => {
				if (i > 0) {
					const bindSimpleOrWithTypeRegExp = /^\w*="(\w*(\s*-\s*\w*)*)"/;
					const bindWithConditional = /^\w*="\s*\w*\s*(\?).*('|"|}|])\s*"/;

					if (bindSimpleOrWithTypeRegExp.test(content)) {
						const bindAttr = content.match(bindSimpleOrWithTypeRegExp)[0];

						if (/prop/.test(bindAttr) || /state/.test(bindAttr))
							return content.replace(bindAttr, bindAttr.replace(/\s*-.*$/, "\""));
						
						return content;
					}
					else if (bindWithConditional.test(content)) {
						const expression = content.match(bindWithConditional)[0];
						const replacedQuotes = expression
							.replace(/"/g, "'")
							.replace("'", "\"")
							.replace(/'$/, "\"");
						
						return content.replace(expression, replacedQuotes);
					}
				}

				//return content of index 0
				return content;
			})
			.join(":");
			
		//Parsing for tags
		let loopParse = bindDirectivesReplaced
			.split(/<(?=for val=)/)
			.map((e, i) => {
				if (i > 0) {
					const tagRegExp = /\s*tag=('|")\w*(-\w*)*('|")/;
					var tagName = "template";
					if (tagRegExp.test(e)) 
						tagName = e.match(tagRegExp)[0]
							.replace(/\s*tag=/, "")
							.replace(/'|"/g, "");

					return e.replace(/for val=(?=.*>)/g, `${tagName} v-for=`)
						.replace(/\/for(?=>)/g, `/${tagName}`)
						.replace(tagRegExp, "");
				}
				return e;
			})
			.join("<");
			
			
		let componentParsed = loopParse
			.split("<component ")
			.map((content, i) => {
				if (i > 0) {
					let componentName = content.match(/name=('|")\w*/)[0].slice(6);
					let splitted = content.split("</component>");
					let componentTag = splitted[0].split(/\r\n|\n|\r/)[0];

					return componentTag
						/*Deleted component name attr*/
						.replace(/component-name=('|")\w*('|")/, componentName)

						/*If not have add enclosing tag*/
						.replace(">", "/>") + splitted[1];
				} 
				return content;
			})
			.join("<");

		return componentParsed;
	}

	/**
	 * Map Component Data
	 *
	 * @private
	 * @param {String} componentName
	 * @param {String} html
	 *
	 * @return {String}
	 */
	_mapComponentData(componentName, html){
		const haveComponents = this.components.length > 0;
		const haveProps = this.props.length > 0;
		const haveStates = this.states.length > 0;
		const haveLifecycles = this.lifecycle.length > 0;
		const haveComputed = this.computed.length > 0;
		const haveMethods = this.methods.length > 0;
		const haveWatchers = this.watchers.length > 0;
		const haveJSX = global.RocketTranslator.jsx;

		//Strings to data content
		var importComponents = "";
		var components = "";
		var props = "";
		var states = "";
		var lifecycle = "";
		var computed = "";
		var methods = "";
		var watchers = "";
		var jsx = "";

		//Components
		if (haveComponents) {
			components = `\ncomponents:{\n${this.components.join(",\n")}\n},`;

			importComponents = this.components.map(({type, name, path}) => {
				if (type === "internal")
					return `import ${name} from "~/components/${name}"\n`;
				else if (type === "external")
					return `import ${name} from "${path}"`;
			}).join("");
		}

		//Props
		if (haveProps) {
			const mappedProps = this.props.map(e => {

				return `\n${e}:{\ntype:String,\nrequired:true,\ndefault:"Hello World"\n},`;
			});
			props = `\nprops:{${mappedProps.join("")}\n},`;
		}
		//Map States
		if (haveStates) {
			var mappedStates = {};

			this.states.forEach(state => {
				const isObject = typeof state === "object";
				const stateName = isObject ? state.key : state.replace(/("|')/g, "");

				mappedStates[stateName] = isObject ? state.value : "";
			});
			states = `\ndata(){\nreturn ${this._JSONPrettify(mappedStates)}\n},`;
		}

		//Lifecycles
		if(haveLifecycles) {
			const mappedLifecycles = this.lifecycle.map(({name, content}) => {
				content = content
					.split(/\n|\r\n|\r/)
					.map(e => e.replace("", ""))
					.join("\r\n");

				return `${name}${content}`;
			});

			lifecycle = `\n${mappedLifecycles.join(",\n")},`;
		}

		//Computed Properties
		if (haveComputed) {
			const mappedComputed = this.computed.map(({name, content}) => `${name}${content}`);

			computed = `\ncomputed:{\n${mappedComputed.join(",\n")}\n},`;
		}

		//Methods
		if (haveMethods){
			const mappedMethods = this.methods.map(({content, name}) => `${name}${content}`);

			methods = `\nmethods:{\n${mappedMethods.join(",\n")}\n},`;
		}

		//Watchers
		if (haveWatchers) {
			const mappedWatchers = this._filterJS(this.watchers, "v").map(({content, name}) => `${name}${content}`);

			watchers = `\nwatch:{\n${mappedWatchers.join(",\n")}\n},`;
		}

		//JSX
		if (haveJSX) {
			const {html: HTML, loops, conditionals} = this._generateJSX(html);

			var preRender = loops.concat(conditionals).join("\n");
			
			jsx = `\nrender() {${preRender} return (${HTML})}`;
		}
		const haveData = 
			haveComponents ||
			haveProps ||
			haveStates ||
			haveLifecycles ||
			haveComputed ||
			haveMethods ||
			haveWatchers ||
			haveJSX;

		const mainTemplate = `${importComponents}export default {\nname:"${componentName || "MyComponent"}"${haveData ? "," : ""}${components}${props}${states}${lifecycle}${computed}${methods}${watchers}${jsx}\n}`;
		
		if (haveData) {
			var plugins = [];
			if (global.RocketTranslator.jsx)
				plugins = ["@babel/plugin-syntax-jsx"];


			return `<script>\n${transform(mainTemplate, {plugins}).code}\n</script>`;
		}
		
		return "";
	}
}

module.exports = VueStateManagement;
