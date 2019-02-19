const lifecycle = require("../../const/Lifecycle.json");
class JavascriptManagement {
	constructor(){
		this._data;
		this._watchers = new Array();
		this._vars = new Array();
		this._states = new Array();
		this._functions = new Array();
		this.lifecycles = new Array();
		this._main();
	}
	_main() {
		this._data = require(global.tempDataFile);
		let dataKeys = Object.keys(this._data);

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

		dataKeys.forEach(key => {
			if (lifecycle.indexOf(key) === -1) {
				if (typeof this._data[key] === "function")
					this.functions = key;
				else
					this._vars.push({name:key, value:this._data[key]});
			}
		});
	}
	set functions(functionName) {
		let name = functionName;
		let content = this._data[name].toString().replace(/\s*=>\s*/, "");
		this._functions.push({name, content});
	}
	get functions(){
		return this._functions;
	}
	set states(js){
		let keys = Object.keys(js);
		keys.forEach(e => {
			this._states.push({key:e, value:js[e]});
		});
	}
	get states(){
		return this._states;
	}
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
	get watchers(){
		return this._watchers;
	}
	get vars(){
		return this._vars;
	}
}
module.exports = JavascriptManagement;
