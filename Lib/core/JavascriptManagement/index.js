class JavascriptManagement {
	constructor(js){
		this.splitReg = /(\n|\r|\r\n)*(?=watch|state|function|var|let|const)/;
		this._watchers = new Array();
		this._vars = new Array();
		this._states = new Array();
		this._functions = new Array();
		this.functions = js;
		this.watchers = js;
		this.vars = js;
		this.states = js;
	}
	set functions(js){
		let methods = js.split(this.splitReg).filter(e=>{
			return e.startsWith("function");
		})
		if (methods) {
			let content = methods.map(e=>{
				if (!e.startsWith("state") && !e.startsWith("watch")) {
					let name = e.match(/function \w*\(.*\)/g)[0]
						.replace("function ", "")
						.replace(/\(.*\)/g, "");
					let content = e.replace(/function \w*\(.*\)/g, "");
					let funcName = e.match(/function \w*\(.*\)/g)[0].replace("function ", "");
					return {
						name,
						funcName,
						content
					}
				}
			})
			this._functions = content.filter(e=>{ 
				return e !== undefined
			})
		}
	}
	get functions(){
		return this._functions;
	}

	set states(js){
		let states = js.split(this.splitReg).filter(e=>{
			return e.startsWith("state");
		})
		if (states) {
			states.forEach(e=>{
				let splited = e.split(" = ");
				let key;
				let toExport;
				key = splited[0].replace("state ", "").replace(";", "");
				if (splited.length > 1) {
					var value = splited[1].replace(/;()/, "");
					toExport = {
						key,
						value
					}
				} else {
					toExport = key;
				}
				this._states.push(toExport);
			})
		}
	}
	get states(){
		return this._states;
	}
	set watchers(js){
		let watchers = js.split(this.splitReg).filter(e=>{
			return e.startsWith("watch");
		})
		if (watchers) {
			watchers.forEach(e=>{
				let name = e.match(/watch \w*/g)[0].replace("watch ", "");
				let content = e.match(/\{((\n|\r).*(\n|\r)*)*\}(?=\n|\r|$)/g)[0];
				let params = e.match(/(\w*|\(.*\))(\s)*(?=\=\>)|function(\s)*\(.*\)/g)[0]
					.replace(/\s/g, "")
					.replace(/function/g, "")
					.replace("(", "")
					.replace(")", "")
					.split(",")
					.join(", ");

					let funcName = `${name}(${params})`;
					this._watchers.push({
						name,
						funcName,
						content,
						params
					})
			})
		}
	}
	get watchers(){
		return this._watchers;
	}
	set vars(js){
		let varMatched = js.split(this.splitReg).filter(e=>{
			if (
				e.startsWith("var") ||
				e.startsWith("let") ||
				e.startsWith("const")
			) 
			  return e;
		})
		if (varMatched) {
			varMatched.forEach(e=>{
				let name = e.match(/(var|let|const)\s*\w*/g)[0].replace(/(var|let|const)(\s*)/, "");
				let filtered = e.replace(/(var|let|const)\s*\w*\s*=\s*/g, "").replace(/;$/, "").replace(/(^("|')|('|")$)/g, "");
				this._vars.push({
					name,
					value:filtered
				})
			})
		}
	}
	get vars(){
		return this._vars;
	}
}

module.exports = JavascriptManagement;