const lifecycle = require("../../const/Lifecycle.json");

class JavascriptManagement {
	/**
	 * Javascript Management
	 * 
	 * Initialize the data and execute the _main method
	 * 
	 * @constructor
	 */
	constructor(){
		this._data;
		this._watchers = new Array();
		this._vars = new Array();
		this._states = new Array();
		this._functions = new Array();
		this._components = new Array();
		this.lifecycles = new Array();
		this._main();
	}
	/**
	 * Main
	 * 
	 * Reset the data, get the Javascript data from the temp data file
	 * 
	 * @return {void}
	 */
	_main() {
		//Reset Data
		this._data = undefined;
		this._watchers = [];
		this._vars = [];
		this._states = [];
		this._functions = [];
		this.lifecycles = [];

		if (!global.RocketFunction)
			return;

		this._data = new Function(`return {${global.RocketFunction}}`)();

		const keys = Object.keys(this._data);

		if(keys.indexOf("setInitialState") > -1)
			this.states = this._data.setInitialState();

		if(keys.indexOf("setStateWatchers") > -1)
			this.watchers = this._data.setStateWatchers();

		if(keys.indexOf("beforeMount") > -1)
			this.lifecycles.push({
				name:"beforeMount",
				content:this._data.beforeMount.toString()
			});

		if(keys.indexOf("mounted") > -1)
			this.lifecycles.push({
				name:"mounted",
				content:this._data.mounted.toString()
			});

		if(keys.indexOf("beforeUpdate") > -1)
			this.lifecycles.push({
				name:"beforeUpdate",
				content:this._data.beforeUpdate.toString()
			});

		if(keys.indexOf("updated") > -1)
			this.lifecycles.push({
				name:"updated",
				content:this._data.updated.toString()
			});

		if(keys.indexOf("beforeUnmount") > -1)
			this.lifecycles.push({
				name:"beforeUnmount",
				content:this._data.beforeUnmount.toString()
			});

		if(keys.indexOf("unmounted") > -1)
			this.lifecycles.push({
				name:"unmounted",
				content:this._data.unmounted.toString()
			});

		if (keys.indexOf("importExternals") > -1)
			this.components = this._data.importExternals();

		keys.forEach(key => {
			if (lifecycle.indexOf(key) === -1) {
				if (typeof this._data[key] === "function")
					this.functions = key;
				else
					this._vars.push({name:key, value:this._data[key]});
			}
		});
	}

	/**
	 * Setter Functions
	 * 
	 * Parse the function and push to _functions Array
	 * 
	 * @param {String} functionName
	 */
	set functions(functionName) {
		const name = functionName;
		var content = this._data[name].toString();
		if (/\w*\s*=>\s*\{/.test(content))
			content = content
				.replace(/\s*=>\s*/, ")")
				.replace(/\s*(?=\w*\))/, "(");

		else
			content = content
				.replace(/\s*=>\s*/, "");

		this._functions.push({name, content});
	}
	/**
	 * Getter Functions
	 * 
	 * Return the _functions Array
	 * 
	 * @return {Array}
	 */
	get functions(){
		return this._functions;
	}
	/**
	 * Setter States
	 * 
	 * Get a Javascript Object and set all states to _states Array
	 * 
	 * @param {Object} js
	 */
	set states(js){
		const keys = Object.keys(js);
		keys.forEach(e => {
			this._states.push({key:e, value:js[e]});
		});
	}
	/**
	 * Getter States
	 * 
	 * Return _states Array
	 * 
	 * @return {Array}
	 */
	get states(){
		return this._states;
	}
	/**
	 * Setter Watchers
	 * 
	 * Get a Javascript Object and set all watchers to _watchers Array
	 * 
	 * @param {Object} js
	 */
	set watchers(js){
		const keys = Object.keys(js);
		keys.forEach(e => {
			const {name} = js[e];
			const content = js[e].toString()
				.replace(/\w*/, "")
				.replace(/\s*=>\s*/, " ");

			this._watchers.push({name, content});
		});
	}
	/**
	 * Getter Watchers
	 * 
	 * Return _watchers Array
	 * 
	 * @return {Array}
	 */
	get watchers(){
		return this._watchers;
	}
	/**
	 * Getter Vars
	 * 
	 * Return _vars Array
	 * 
	 * @return {Array}
	 */
	get vars(){
		return this._vars;
	}

	set components(data) {
		this._components = Object.entries(data).map(e => {
			return {
				name: e[0],
				path: e[1],
				type: "external"
			};
		});
	}
	get components() {
		return this._components;
	}
}
module.exports = JavascriptManagement;
