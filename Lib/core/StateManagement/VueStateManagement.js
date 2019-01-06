const StateManagement = require("./StateManagement");
/**
 * Vue State Management
 *
 * Class to handle the Vue Data
 *
 * @extends StateManagement
 *
 */
class VueStateManagement extends StateManagement {

	/**
	 * Component Data
	 * 
	 * Return the filtered component data
	 *
	 * @public
	 * @param {string} componentName
	 * @return {string}
	 *
	 */
	componentData(componentName){
		return this._mapComponentData(componentName);
	}

	/**
	 * Filter HTML
	 *
	 * Filter and return the html with the Vue Syntax
	 *
	 * @public
	 * @param {string} html
	 * @return {string}
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

		//Parsing the data on braces
		let replaceTypeValueData = addOpenBraces
			.replace(/\s*-\s*(\w*|(")*\w*(")*)(?=\s*|\/|>)/g, "\"");
		
		//Parsing Event Tags "on"
		let addEventToVue = replaceTypeValueData
			.replace(/on(?=\w*="\w*\(.*\)")/g, "@");

		/*----------Parsing Inputs Tags----------*/
		
		/*
		* If have the attr "name" this is replace whit the v-model directive
		*/

		let inputTag = addEventToVue
			.split(/<input/g)
			.map((content, i) => {
				if (i > 0) {
					let nameTag = content.match(/name=("|')\w*("|')/);
					
					let vModelDirective = nameTag ? `v-model='${nameTag[0].match(/"\w*(?=")/)[0].slice(1)}'`: "";
					
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
					
					let vModelDirective = nameTag ? `v-model='${nameTag[0].match(/"\w*(?=")/)[0].slice(1)}'`: "";
					
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
					
					let vModelDirective = nameTag ? `v-model='${nameTag[0].match(/"\w*(?=")/)[0].slice(1)}'`: "";
					
					return content.replace(" ", ` ${vModelDirective}`);
				} 
				return content;
			})
			.join("<select");

		//Parsing the bind attr with the v-bind directive
		let bindDirectivesReplaced = selectTag
			.split(/:(?=\w*=)/)
			.map((content, i) => {
				if (i > 0) {

					//if have Attribute whit data
					if (content.match(/^\w*="\w*"/)) {
						return content;
					}

					//else
					return content.replace(/""/, "\"'").replace("\"", "'");
				}

				//return content of index 0
				return content;
			})
			.join(":");

		//Parsing conditionals tags
		let condParsed  = bindDirectivesReplaced
			/*Replace closing if and else tags with the template tag*/
			.replace(/(\/if|\/else)(?=>)/g, "/template")
			
			/*Replace open if tag*/
			.replace(/if\s*cond=/g, "template v-if=")

			/*Replace open else tag*/
			.replace(/else(?=>)/g, "template v-else")

			/*Replace unused spaces and duplicates quotes*/
			.replace(/'(?=\s*.*>)/g, "\"")
			.replace(/''(?=.*>)/g, "'\"");

		//Parsing for tags
		let loopParse = condParsed
			.replace(/for val=(?=.*>)/g, "template v-for=")
			.replace(/\/for(?=>)/g, "/template");
			
		let componentParsed = loopParse
			.split("<component ")
			.map((content, i) => {
				if (i > 0) {
					let componentName = content.match(/name=('|")\w*/)[0].slice(6);
					let splitted = content.split("</component>");
					let componentTag = splitted[0].split(/\r\n|\n|\r/)[0];

					return componentTag
						/*Deleted component name attr*/
						.replace(/name=('|")\w*('|")/, componentName)

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
	 * @param {string} componentName
	 * @return {string}
	 *
	 */
	_mapComponentData(componentName){
		//Strings to data content
		let states = "";
		let computed = "";
		let methods = "";
		let components = "";
		let importComponents = "";
		let watchers = "";
		let props = "";

		//Map States
		if (this.states.length > 0) {
			var mappedStates = {};

			this.states.forEach(state => {
				let isObject = typeof state === "object";
				let stateName = isObject ? state.key : state.replace(/("|')/g, "");

				mappedStates[stateName] = isObject ? state.value : "";
			});
			states = `\n\tdata(){\n\t\treturn ${this._JSONPrettify(mappedStates)}\n\t},`;
		}

		//Components
		if (this.components.length > 0) {
			components = `\n\tcomponents:{\n\t\t${this.components.join(",\n\t\t")}\n\t},`;
			this.components.forEach(e => {
				importComponents += `import ${e} from "~/components/${e}"\n`;
			});
		}

		//Computed Properties
		if (this.computed.length > 0) {
			let lastIndex = this.computed.length -1;
			let mappedComputed = this.computed.map(({content, name}, i) => {
				let comma = i ===  lastIndex ? "\n":",\n\t\t";

				//Computed with content
				return `${name}() ${content}${comma}`;
			});
			computed = `\n\tcomputed:{\n\t\t${mappedComputed.join("")}\t},`;
		}

		//Methods
		if (this.methods.length > 0){
			let lastIndex = this.computed.length -1;
			let mappedMethods = this.methods.map(({content, name, params}, i) => {
				let comma = i === lastIndex ? "\n":",\n";

				//Method with content
				return `${name}(${params}) ${content}${comma}`;
			});
			methods = `\n\tmethods:{\n\t\t${mappedMethods.join("\t\t")}\t},`;
		}

		//Watchers
		if (this.watchers.length > 0) {
			let mappedWatchers = this._filterJS(this.watchers, "v")
				.map(({content, funcName}) => {
					return `${funcName} ${content}`;
				});

			watchers = `\n\twatch:{\n\t\t${mappedWatchers.join("\n\t\t")}\n\t}`;
		}
		//Props
		if (this.props.length > 0) {
			let lastIndex = this.props.length - 1;
			let mappedProps = this.props.map((e, i) => {

				let comma = i === lastIndex ? "" : ",";
				return `\n\t\t${e}:{\n\t\t\ttype:String,\n\t\t\trequired:true,\n\t\t\tdefault:"Hola Mundo"\n\t\t}${comma}`;
			});
			props = `\n\tprops:{${mappedProps.join("")}\n\t},`;
		}

		let mainTemplate = 	`${importComponents}\nexport default {\n\tname:${componentName || "MyComponent"},${components}${props}${states}${computed}${methods}${watchers}\n}`;
		if (componentName ||
			states ||
			computed ||
			methods ||
			components ||
			watchers ||
			props
		) {
			return `<script>\n${mainTemplate}\n</script>`;
		}
		
		return "";
	}
}

module.exports = VueStateManagement;
