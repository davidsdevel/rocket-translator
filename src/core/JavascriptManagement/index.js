import lifecycle from "Const/Lifecycle.json";
import {unlinkSync, existsSync} from "fs";

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

		if (!global.RocketData)
			return;
		
		this._data = new Function(`return {${global.RocketData}}`)();

		if(this._data.setInitialState)
			this.states = this._data.setInitialState();

		if(this._data.setStateWatchers)
			this.watchers = this._data.setStateWatchers();

		if(this._data.beforeMount)
			this.lifecycles.push({
				name:"beforeMount",
				content:this._data.beforeMount.toString()
			});

		if(this._data.mounted)
			this.lifecycles.push({
				name:"mounted",
				content:this._data.mounted.toString()
			});

		if(this._data.beforeUpdate)
			this.lifecycles.push({
				name:"beforeUpdate",
				content:this._data.beforeUpdate.toString()
			});

		if(this._data.updated)
			this.lifecycles.push({
				name:"updated",
				content:this._data.updated.toString()
			});

		if(this._data.beforeUnmount)
			this.lifecycles.push({
				name:"beforeUnmount",
				content:this._data.beforeUnmount.toString()
			});

		if(this._data.unmount)
			this.lifecycles.push({
				name:"unmount",
				content:this._data.unmount.toString()
			});

		const dataKeys = Object.keys(this._data);
		dataKeys.forEach(key => {
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
		let name = functionName;
		let content = this._data[name].toString().replace(/\s*=>\s*/, "");
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
		let keys = Object.keys(js);
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
		let keys = Object.keys(js);
		keys.forEach(e => {
			let {name} = js[e];
			let content = js[e].toString()
				.replace(/\w*/, "")
				.replace(/\s*=>\s*/, " ")
				.split(/\n|\r\n|\r/)
				.map(e => e.replace(/\t\t|\s\s\s\s\s\s\s\s/, ""))
				.join("\n");

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
}
export default JavascriptManagement;
