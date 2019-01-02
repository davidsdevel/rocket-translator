const {readFileSync} = require("fs");
const clc = require("cli-color");

class ErrorManagement {
	constructor() {
		let file = Buffer.from(readFileSync(translatorFilePath)).toString();
		this.lines = file.split(/\r\n|\n|\r/);
		console.log(clc.redBright("\nError!!!\n"))
	}
	duplicateState(array) {
		let linesArray = [];
		this.lines.forEach((line, i)=>{
			array.forEach(state => {
				if(typeof state === "object") {
					let matched = line.match(new RegExp(`\\{${state.key} - state - .*${state.value}.*\\}`));
					if(matched){
						linesArray.push({
							name:state.key,
							content:line.replace(/\t/g, ""),
							line:i+1
						})
					}
				} else {
					let matched = line.match(new RegExp(`\\{${state} - state\\}`));
					if(matched){
						linesArray.push({
							name:state,
							content:line.replace(/\t/g, ""),
							line:i+1
						})
					}
				}
			})
		});
		console.log(clc.whiteBright(`Duplicate State:\n`))

		linesArray.forEach(({name, content, line})=> {
			console.log(`-> ${clc.whiteBright(name)} on line: ${clc.whiteBright(line)} ${clc.red(content)}`);
		});
		process.exit(1);
	}
	missingVar(stateName, varName) {
		this.lines.forEach((line, i)=>{
			let matched = line.match(new RegExp(`{${stateName}\\s*-\\s*state\\s*-\\s*${varName}}`))
			if (matched) {
				console.log(`Missing Var: ${clc.whiteBright(varName)} on line: ${clc.whiteBright(i+1)} ${clc.red(line.replace(/\t/g, ""))}`);
				process.exit(1)
			}
		});
	}
	duplicateComponent(componentName) {
		let linesArray = [];
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`<component name=('|")${componentName}('|")`));
			if (matched) linesArray.push({content:line, line:i+1})
		});
		console.log(clc.whiteBright("Duplicate Component:\n"))
		linesArray.forEach(({line, content})=>{
			console.log(`-> ${clc.whiteBright(componentName)} on line: ${clc.whiteBright(line)} ${clc.red(content)}`)
		});
		process.exit(1);
	}
	undefinedMethodError(methodName) {
		console.log(clc.whiteBright(`Undefined Method:\n`));
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`on.*=('|")${methodName}\\(.*\\)('|")`));
			if (matched) console.log(`-> ${clc.whiteBright(methodName)} on line: ${i+1} ${clc.red(line.replace(/\t/g, ""))}`);
		});
		process.exit(1)
	}
	undefinedComputedError(computedName){
		console.log(clc.whiteBright(`Undefined Computed:\n`));
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`{${computedName}\\s*-\\s*computed}`));
			if (matched) console.log(`-> ${clc.whiteBright(computedName)} on line: ${i+1} ${clc.red(line.replace(/\t/g, ""))}`);
		});
		process.exit(1)
	}
	unableToWatchState(watcherName) {
		console.log(clc.whiteBright(`Unable to Watch State:\n`));
		this.lines.forEach((line, i)=>{
			let matched = line.match(new RegExp(`watch\\s*${watcherName}\\s*=`));
			if (matched) {
				console.log(`-> ${clc.whiteBright(watcherName)} on line: ${i+1}`);
				process.exit(1);
			}
		});
	}
}

class DuplicateStateError extends ErrorManagement {
	constructor(states) {
		super();
		this.duplicateState(states);
	}
}

class MissingVarError extends ErrorManagement {
	constructor(stateName, varName) {
		super();
		this.missingVar(stateName, varName);
	}
}
class DuplicateComponentError extends ErrorManagement {
	constructor(componentName) {
		super();
		this.duplicateComponent(componentName);
	}
}
class UndefinedMethodError extends ErrorManagement {
	constructor(methodName) {
		super();
		this.undefinedMethodError(methodName)
	}
}
class UndefinedComputedError extends ErrorManagement {
	constructor(computedName) {
		super();
		this.undefinedComputedError(computedName)
	}
}
class UnableToWatchStateError extends ErrorManagement {
	constructor(watcherName) {
		super();
		this.unableToWatchState(watcherName);
	}
}
module.exports = () => {
	global = {
		...global,
		DuplicateStateError,
		MissingVarError,
		DuplicateComponentError,
		UndefinedComputedError,
		UndefinedMethodError,
		UnableToWatchStateError
	}
}
