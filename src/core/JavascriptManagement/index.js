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

		if (!global.tempDataFile)
			return;
		
		eval(global.tempDataFile);

		if(setInitialState)
			this.states = setInitialState();

		if(setStateWatchers)
			this.watchers = setStateWatchers();

		if(beforeMount)
			this.lifecycles.push({
				name:"beforeMount",
				content:beforeMount.toString()
			});

		if(mounted)
			this.lifecycles.push({
				name:"mounted",
				content:mounted.toString()
			});

		if(beforeUpdate)
			this.lifecycles.push({
				name:"beforeUpdate",
				content:beforeUpdate.toString()
			});

		if(updated)
			this.lifecycles.push({
				name:"updated",
				content:updated.toString()
			});

		if(beforeUnmount)
			this.lifecycles.push({
				name:"beforeUnmount",
				content:beforeUnmount.toString()
			});

		if(unmount)
			this.lifecycles.push({
				name:"unmount",
				content:unmount.toString()
			});

		var data = global.tempDataFile;
		console.log(data);
		dataKeys.forEach(key => {
			if (lifecycle.indexOf(key) === -1) {
				if (typeof this._data[key] === "function")
					this.functions = key;
				else
					this._vars.push({name:key, value:this._data[key]});
			}
		});
		if (existsSync(global.defineGlobals))
			unlinkSync(global.defineGlobals);
		if (existsSync(global.tempDataFile))
			unlinkSync(global.tempDataFile);
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
