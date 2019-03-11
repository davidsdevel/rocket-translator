const StateManagement = require("./StateManagement");
const JavaScriptEvents = require("../../const/Events.json");
const {isUpperCase} = require("../../commons/utils");

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
		if(haveStates) {
			let mappedStates = this.states.map(e => {
				if(typeof e === "object")
					return `${e.key} = ${this._aDefineTypeFromString(e.value)};`;
				
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

		return `${props}${states}${methods}`;
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
				if (e) {

					if (i === 0) 
						return e;

					if (e.match(/prop/))
						return `{{${e.replace(/(\s*-.*\})/g, "}}")}`;
					
					if (e.match(/computed/)) 
						return `{{${e.replace(/(\s-.*\})/g, "}}")}`;
					
					if (e.match(/state/))
						return `{{${e.replace(/(\s*-.*\})/g, "}}")}`;
					
					return `{{${e}}}`;
				}
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
				
				return e.replace(/^\w*/, `${newName}-root`);
			})
			.join("<")
			/*Bind Directives*/
			.split(/:(?=\w*=)/)
			.map((content, i) => {
				if (i > 0) {
					const attr = content.match(/^\w*/)[0];
					const bindAttr = content.match(/^\w*='.*'(?=\s*\/>|\s*>|(\s*\w*=('|")))/)[0];

					const replacedQuotes = bindAttr
						.replace(/"/g, "'")
						.replace("'", "\"")
						.replace(/'$/, "\"");

					console.log(replacedQuotes);
					return content
						.replace(bindAttr, replacedQuotes)
						.replace(/^\w*/, `[${attr}]`);
				}

				//return content of index 0
				return content;
			})
			.join("");
	}
	/**
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
	_aDefineTypeFromString(string){
		let _isString = /^\w*(\s*\w*)*$/.test(string);
		let _isDigit = /^\d*$/.test(string);
		let _isBoolean = /(true|false)$/g.test(string);
		let _isArray = /^\[.*\]$/.test(string);
		let _isObject = /^\{(\r|\n)*((\t*).*(\r|\n*))*\}/g.test(string);
		let _isNull = /null$/g.test(string);
		let _isUndefined = /undefined$/g.test(string);
		let _isNaN = /NaN$/g.test(string);
		let _isInfinity = /Infinity$/g.test(string);

		if (_isDigit)
			return parseFloat(string);

		if (_isNull)
			return null;

		if (_isNaN)
			return NaN;

		if (_isInfinity)
			return Infinity;

		if (_isUndefined)
			return undefined;

		if (_isBoolean)
			return this._BooleanParser(string);
		
		if(_isArray)
			return this._ArrayAndObjectParser(_isArray[0]);
		
		if (_isObject)
			return this._ArrayAndObjectParser(_isObject[0]);
		
		if(_isString)
			return `"${string}"`;
	}
}
module.exports = AngularStateManagement;
