import {readFileSync} from"fs";
import clc from "cli-color";

class ErrorManagement {
	constructor() {
		let file = Buffer.from(readFileSync(global.translatorFilePath)).toString();
		this.lines = file.split(/\r\n|\n|\r/);
		console.log(clc.redBright("\nError!!!\n"));
	}
	duplicateState(array) {
		let linesArray = [];
		this.lines.forEach((line, i) => {
			array.forEach(state => {
				if(typeof state === "object") {
					let matched = line.match(new RegExp(`\\{${state.key} - state - .*${state.value}.*\\}`));
					if(matched){
						linesArray.push({
							name:state.key,
							line:i+1
						});
					}
				} else {
					let matched = line.match(new RegExp(`\\{${state} - state\\}`));
					if(matched){
						linesArray.push({
							name:state,
							line:i+1
						});
					}
				}
			});
		});
		console.log(clc.whiteBright("Duplicate State:\n"));

		linesArray.forEach(({name, line}) => {
			console.log(`-> ${clc.whiteBright(name)} on line: ${clc.whiteBright(line)}\n`);
			console.log(clc.redBright(`${line-1}|`)+clc.red(` ${this.lines[line-2]}`));
			console.log(clc.redBright(`${line}| ${this.lines[line-1]}`));
			console.log(clc.redBright(`${line+1}|`)+clc.red(` ${this.lines[line]}`));
		});
		process.exit(1);
	}
	missingVar(stateName, varName) {
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`{${stateName}\\s*-\\s*state\\s*-\\s*${varName}}`));
			if (matched) {
				console.log(`Missing Var: ${clc.whiteBright(varName)} on line: ${clc.whiteBright(i+1)}\n`);
				console.log(clc.redBright(`${i}|`)+clc.red(` ${this.lines[i-1]}`));
				console.log(clc.redBright(`${i+1}| ${this.lines[i]}`));
				console.log(clc.redBright(`${i+2}|`)+clc.red(` ${this.lines[i+1]}`));
				process.exit(1);
			}
		});
	}
	duplicateComponent(componentName) {
		let lines = [];
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`<component name=('|")${componentName}('|")`));
			if (matched) lines.push(i+1);
		});
		console.log(clc.whiteBright("Duplicate Component:"));
		lines.forEach(line => {
			console.log(`\n-> ${clc.whiteBright(componentName)} on line: ${clc.whiteBright(line+1)}\n`);
			console.log(clc.redBright(`${line}|`)+clc.red(`${this.lines[line-2]}`));
			console.log(clc.redBright(`${line+1}|${this.lines[line-1]}`));
			console.log(clc.redBright(`${line+2}|`)+clc.red(`${this.lines[line]}`));		
		});
		process.exit(1);
	}
	undefinedMethodError(methodName) {
		console.log(clc.whiteBright("Undefined Method:\n"));
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`on.*=('|")${methodName}\\(.*\\)('|")`));
			if (matched) {
				console.log(`-> ${clc.whiteBright(methodName)} on line: ${i+1}`);
				console.log(clc.redBright(`${i}|`)+clc.red(`${this.lines[i-1]}`));
				console.log(clc.redBright(`${i+1}|${this.lines[i]}`));
				console.log(clc.redBright(`${i+2}|`)+clc.red(`${this.lines[i+1]}`));
			}
		});
		process.exit(1);
	}
	undefinedComputedError(computedName){
		console.log(clc.whiteBright("Undefined Computed:\n"));
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(`{${computedName}\\s*-\\s*computed}`));
			if (matched) {
				console.log(`-> ${clc.whiteBright(computedName)} on line: ${i+1}`);
				console.log(clc.redBright(`${i}|`)+clc.red(`${this.lines[i-1]}`));
				console.log(clc.redBright(`${i+1}|${this.lines[i]}`));
				console.log(clc.redBright(`${i+2}|`)+clc.red(`${this.lines[i+1]}`));
			}
		});
		process.exit(1);
	}
	unableToWatchState(watcherName) {
		console.log(clc.whiteBright("Unable to Watch State:\n"));
		this.lines.forEach((line, i) => {
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
		this.undefinedMethodError(methodName);
	}
}
class UndefinedComputedError extends ErrorManagement {
	constructor(computedName) {
		super();
		this.undefinedComputedError(computedName);
	}
}
class UnableToWatchStateError extends ErrorManagement {
	constructor(watcherName) {
		super();
		this.unableToWatchState(watcherName);
	}
}
export default () => {
	global.DuplicateStateError = DuplicateStateError;
	global.MissingVarError = MissingVarError;
	global.DuplicateComponentError = DuplicateComponentError;
	global.UndefinedComputedError = UndefinedComputedError;
	global.UndefinedMethodError = UndefinedMethodError;
	global.UnableToWatchStateError = UnableToWatchStateError;
};
