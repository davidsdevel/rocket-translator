import StateManagement from "./StateManagement";
import JavaScriptEvents from "Const/Events.json";
import Utils from "Commons/utils";

const {isUpperCase} = Utils;

/**
 * Class Angular State Management
 * 
 * @class
 * @extends StateManagement
 */
class AngularStateManagement extends StateManagement {
	/**
	 * Get Component Data (getter)
	 * 
	 * @public
	 * @return {string}
	 */
	get componentData() {
		/*
			States
			lifecycles
			Props
			Methods
			Computeds
			watchers
		*/
		const haveStates = this.states.length > 0;
		const haveProps = this.props.length > 0;
		const haveLifecycles = this.lifecycle.length > 0;
		const haveComputed = this.computed.length > 0;
		const haveMethods = this.methods.length > 0;
		const haveWatchers = this.watchers.length > 0;

		let states = "";
		let methods = "";
		let props = "";
		let computed = "";

		if(haveStates) {
			let mappedStates = this.states.map(e => {
				if(typeof e === "object")
					return `${e.key} = ${this._toString(e.value)};`;
				
				return `${e} = "";`;
			});
			states = `${mappedStates.join("\n\t")}\n\n\t`;
		}
		if(haveMethods){
			let mappedMethods = this.methods.map(({name, content}) => {
				return `${name}${content}`;
			});
			methods = `${mappedMethods.join("\n\t")}\n\n\t`;
		}
		if (haveProps) {
			let mappedProps = this.props.map(e => `@Input() ${e} : string;`);

			props = `${mappedProps.join("\n\t")}\n\n\t`;
		}
		if (haveComputed) {
			let mappedComputed = this.computed.map(({name, content}) => `get ${name}(): string ${content.replace(/\(.*\)/, "")}`);

			computed = `${mappedComputed.join("\n\t")}\n\t`;
		}

		return `${props}${states}${methods}${computed}`;
	}
	
	/**
	 * Filter HTML
	 *
	 * @public
	 * @param {string} html
	 *
	 * @return {string}
	 *
	 */
	filterHTML(html) {
		return html
			/*Replace All Quotes with single quotes*/
			.replace(/"/g, "'")

			/*Filter html data*/
			.split(/\{(?=\w*)/g)
			.map((e, i) => {
				if (i === 0) 
					return e;

				return `{{${e.replace(/(\s*-.*\})/g, "}}")}`;
			})
			.join("")

			/*Filter HTML Events*/
			.split(new RegExp(`on(?=${JavaScriptEvents.join("|")})`))
			.map((e, i) => {
				if (i > 0) {
					const event = e.match(/\w*(?==)/)[0];
					return  `(${event})${e.replace(event, "")}`;
				}
				return e;
			})
			.join("")
			/*Filter Components Declaration*/
			.split(/<(?=[A-Z]\w*)/)
			.map((e, i) => {
				if (i === 0)
					return e;

				let componentName = e.match(/^\w*/)[0];
				let newName = this.generateComponentName(componentName);
				
				return e.replace(/^\w*/, `${newName}-root`).replace(/\s*\/>/, `></${newName}-root>`);
			})
			.join("<")
			/*Bind Directives*/
			.split(/:(?=\w*=)/)
			.map((content, i) => {
				if (i > 0) {
					const bindSimpleOrWithTypeRegExp = /^\w*='(\w*(\s*-\s*\w*)*)'/;
					const bindWithConditional = /^\w*='\s*\w*\s*(\?).*('|"|}|])\s*'/;

					if (bindSimpleOrWithTypeRegExp.test(content)) {

						const bindAttr = content.match(bindSimpleOrWithTypeRegExp)[0];

						const attrName = bindAttr.match(/\w*/)[0];

						content = content.replace(new RegExp(`^${attrName}`), `[${attrName}]`);

						if (/prop/.test(bindAttr) || /state/.test(bindAttr))
							return content.replace(/\s*-\s*\w*'/, "'");
						
						return content;
					}
					else if (bindWithConditional.test(content)) {
						const expression = content.match(bindWithConditional)[0];
						const replacedQuotes = expression
							.replace(/"/g, "'")
							.replace("'", "\"")
							.replace(/'$/, "}}");
						
						return content
							.replace(expression, replacedQuotes)
							.replace("=\"", "={{");
					}
				}

				//return content of index 0
				return content;
			})
			.join("")
			.split(/<(?=for\s*val=)/)
			.map((e, i) => {
				if (i > 0) {
					const tagRegExp = /\s*tag=('|")\w*(-\w*)*('|")/;
					var tagName = "div";

					if (tagRegExp.test(e)) 
						tagName = e.match(tagRegExp)[0]
							.replace(/\s*tag=/, "")
							.replace(/'|"/g, "");

					const loopData = e.match(/\w*\s*in\s*\w*/)[0];

					const dataSplitted = loopData.split(/\s*in\s*/);

					const varName = dataSplitted[0];
					const stateName = dataSplitted[1];

					return e.replace(/for val=(?=.*>)/g, `${tagName} *ngFor=`)
						.replace(/\/for(?=>)/g, `/${tagName}`)
						.replace(tagRegExp, "")
						.replace(loopData, `let ${varName} of ${stateName}`);
				}
				return e;
			})
			.join("<")
			.split(/<(?=if\s*cond=)/)
			.map((e, i) => {
				if (i > 0) {
					var haveElse = false;
					var elseId;
					const dataSplitted = e.split(/<(?=else)/);

					const mappedData = dataSplitted.map(conditional => {
						var data = conditional;
						const tagRegExp = /\s*tag=('|")\w*(-\w*)*('|")/;

						const conditionalTag = /^\w*(-\w*)*/.exec(conditional)[0];

						const isElse = /^else\s*.*>/.test(conditional);

						// TODO: Add Else If Support
						//const isElseIf = /else-if\s*/.test(conditional);
						
						haveElse = isElse;

						var tagName = "div";
						var haveTag = tagRegExp.test(conditional);

						if (haveTag) {
							tagName = e.match(tagRegExp)[0]
								.replace(/\s*tag=/, "")
								.replace(/'|"/g, "");
							
						}
						if (isElse) {
							let id = ""; //Empty String to set a conditional ID
							
							/*
							* Generate ID
							*/
							for (let a = 0; a <= 3; a++) {
								id += new String(Math.floor(Math.random()*10));
							}

							elseId = id;
							tagName = haveTag ? tagName : "ng-template";
							data = data
								.replace(/^else.*>/, `${tagName} #elseBlock${id}>`)
								.replace("</else>", `<${tagName}>`);
						}

						data = data
							.replace(conditionalTag, tagName)
							.replace(`</${conditionalTag}>`, `</${tagName}>`)
							.replace(tagRegExp, "")
							.replace(/cond=/, "*ngIf=");

						return data;
					});
					if (haveElse) {
						var mainIf = mappedData[0];
						const cond = mainIf.match(/\*ngIf=('|").*('|")/)[0];

						const newCond = cond.replace(/('|")$/, `; else elseBlock${elseId}'`);

						mappedData[0] = mainIf.replace(cond, newCond);
					}

					return mappedData.join("<");
				}
				return e;
			}).join("<")
			.split("<component ").map((e, i) => {
				if (i > 0) {
					let name = e.match(/component-name=('|")\w*/)[0].replace(/component-name=('|")/, "");
					name = this.generateComponentName(name);
					const attributes = e.split(">")[0].split(/\s(?=\w*=')/).map((attr, ind) => {
						if (ind > 0)
							return attr.match(/^\w*/)[0];

						return null;
					}).filter(a => a);

					let splitted = e.split("</component>");
					let tag = splitted[0].split(/\r\n|\n|\r/)[0];

					tag = tag.replace(/component-name=('|")\w*('|")/, `${name}-root`).replace(">", `></${name}-root>`) + splitted[1];

					attributes.forEach(a => {
						tag = tag.replace(new RegExp(`${a}(?==')`), `[${a}]`);
					});
					return tag;
				} 
				return e;
			})
			.join("<");
	}
	/**
	 * Generate Component 
	 *
	 * Take a Camel Case and return Kebab Case
	 *
	 * @param {String} name
	 *
	 * @return {String}
	 */
	generateComponentName(name) {
		let newName = "";

		for (let i = 0; i < name.length; i++) {
			let letter = name[i];

			if (isUpperCase(letter)) {
				if (i === 0)
					newName += letter.toLowerCase();
				else
					newName += `-${letter.toLowerCase()}`;
			}
			else 
				newName += letter;			
		}

		return newName;
	}
	/**
	 *  To String
	 * 
	 * Get all and Return String
	 * 
	 * @private
	 * @param {any} data 
	 * 
	 * @return {String}
	 */
	_toString(data){

		let _isNull = data === null;
		let _isUndefined = data === undefined;
		// eslint-disable-next-line use-isnan
		let _isNaN = data === NaN;
		let _isInfinity = data === Infinity;

		if (_isNull)
			return "null";

		if (_isNaN)
			return "NaN";

		if (_isInfinity)
			return "Infinity";

		if (_isUndefined)
			return "undefined";
		
		return JSON.stringify(data);
	}
}

export default AngularStateManagement;
