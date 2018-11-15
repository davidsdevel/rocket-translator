class JSParser {
	constructor(js){
		this.js = js;
		this.splitReg = /(\n|\r|\r\n)*(?=watch|state|function|var|let|const)/;
		this.watchers = [];
		this.vars = [];
		this.content = [];
		this._separate();
		this.setWatchers();
		this.setVars();
	}
	_separate(){
		let methods = this.js.split(this.splitReg).filter(e=>{
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
			this.content = content.filter(e=>{ 
				return e !== undefined
			})
		}
	}
	getStates(){
		let states = this.js.split(this.splitReg).filter(e=>{
			return e.startsWith("state");
		})
		if (states) {
			let mapped = states.map(e=>{
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
				return toExport;
			})
			return mapped
		}
	}
	setWatchers(){
		let watchers = this.js.split(this.splitReg).filter(e=>{
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
					this.watchers.push({
						name,
						funcName,
						content,
						params
					})
			})
		}
	}
	setVars(){
		let varMatched = this.js.split(this.splitReg).filter(e=>{
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
				this.vars.push({
					name,
					value:filtered
				})
			})
		}
	}
	getVars(){
		return this.vars;
	}
	getWatchers(){
		return this.watchers;
	}
	getParsed(){
		return this.content;
	}
}

module.exports = JSParser;