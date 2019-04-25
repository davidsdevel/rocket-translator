import FileUtils from "Commons/file";
import clc from "cli-color";

const {readFileAsString} = FileUtils;

class ErrorManagement {
	constructor() {
		let file = readFileAsString(global.translatorFilePath);
		this.lines = file.split(/\r\n|\n|\r/);
		console.log(clc.redBright("\nError!!!\n"));
	}
	/**
	 * Throw Error
	 * 
	 * Get the Component data and throw a new Error
	 * 
	 * @param {String} data 
	 * @param {String} type Error Type
	 */
	throwError(data, type) {
		let stringToMatch;
		let name;
		switch(type) {
		case "Missing Var":
			stringToMatch = `{${data.stateName}\\s*-\\s*state\\s*-\\s*${data.varName}}`;
			name = data.stateName;
			break;
		case "Duplicate Component":
			stringToMatch = `<component name=('|")${data}('|")`;
			name = data;
			break;
		case "Undefined Method":
			stringToMatch = `on.*=('|")${data}\\(.*\\)('|")`;
			name = data;
			break;

		case "Undefined Computed":
			stringToMatch = `{${data}\\s*-\\s*computed}`;
			name = data;
			break;

		case "Undefined State":
			stringToMatch = data.string;
			// eslint-disable-next-line prefer-destructuring
			name = data.name;
			break;
		case "Expected Token":
			stringToMatch = data.split(/\r\n|\n|\r/)[0];
			name = "}";
			break;
		case "Undefined Type":
			stringToMatch = data;
			name = data
				.split("-")[1]
				.replace(/^\s*/, "")
				.replace(/\s*$/, "");
			break;
		case "Expected Attribute":
			stringToMatch = data.line;
			// eslint-disable-next-line prefer-destructuring
			name = data.name;
			break;
		case "Undefined Input Name":
			stringToMatch = data;
			name = "";
			break;
		case "State Already Defined":
			stringToMatch = `${data}\\s*:.*`;
			name = data;
			break;
		default: break;
		}
		console.log(clc.whiteBright(`${type}:\n`));
		this.lines.forEach((line, i) => {
			let matched = line.match(new RegExp(stringToMatch));
			if (matched) {
				console.log(`-> ${clc.whiteBright(name)} on line: ${i+1}`);
				console.log(clc.redBright(`${i}|`)+clc.red(`${this.lines[i-1]}`));
				console.log(clc.redBright(`${i+1}|${this.lines[i]}`));
				console.log(clc.redBright(`${i+2}|`)+clc.red(`${this.lines[i+1]}`));
			}
		});
		process.exit(1);
	}
}

class MissingVarError extends ErrorManagement {
	/**
	 * Missing Var Error
	 * 
	 * @constructor
	 * 
	 * @param {String} stateName 
	 * @param {String} varName 
	 */
	constructor(stateName, varName) {
		super();
		this.throwError({stateName, varName}, "Missing Var");
	}
}
class DuplicateComponentError extends ErrorManagement {
	/**
	 * Duplicate Component Error
	 * 
	 * @constructor
	 * 
	 * @param {String} componentName 
	 */
	constructor(componentName) {
		super();
		this.throwError(componentName, "Duplicate Component");
	}
}
class UndefinedMethodError extends ErrorManagement {
	/**
	 * Undefined Method Error
	 * 
	 * @constructor
	 * 
	 * @param {String} methodName 
	 */
	constructor(methodName) {
		super();
		this.throwError(methodName, "Undefined Method");
	}
}
class UndefinedComputedError extends ErrorManagement {
	/**
	 * Undefined Computed Error
	 * 
	 * @constructor
	 * 
	 * @param {String} computedName 
	 */
	constructor(computedName) {
		super();
		this.throwError(computedName, "Undefined Computed");
	}
}
class ExpectedTokenError extends ErrorManagement {
	/**
	 * Expected Token Error
	 * 
	 * @constructor
	 * 
	 * @param {String} data 
	 */
	constructor(data) {
		super();
		this.throwError(data, "Expected Token");
	}
}
class UndefinedTypeError extends ErrorManagement {
	/**
	 * Undefined Type Error
	 * 
	 * @constructor
	 * 
	 * @param {String} data 
	 */
	constructor(data) {
		super();
		this.throwError(data, "Undefined Type");
	}
}
class UndefinedStateError extends ErrorManagement {
	/**
	 * Undefined State Error
	 * 
	 * @constructor
	 * 
	 * @param {String} data 
	 */
	constructor(data) {
		super();
		let {type, name} = data;
		let stringToMatch;
		switch(type) {
		case "conditional":
			stringToMatch = `<if\\s*cond=('|")${name}`;
			break;
		case "loop":
			stringToMatch = `<for\\s*val=('|")\\w*\\s*in\\s*${name}('|")`;
			break;
		case "watcher":
			stringToMatch = `watch\\s*${name}\\s*=`;
			break;
		default: break;
		}
		this.throwError({name, string:stringToMatch}, "Undefined State");
	}
}
class ExpectedAttributeError extends ErrorManagement {
	/**
	 * Expected Attribute Error
	 * 
	 * @constructor
	 * 
	 * @param {String} line 
	 * @param {String} name 
	 */
	constructor(line, name) {
		super();
		this.throwError({line, name}, "Expected Attribute");
	}
}
class UndefinedInputNameError extends ErrorManagement {
	/**
	 * Undefined Input Name Error
	 * 
	 * @constructor
	 * 
	 * @param {String} line 
	 */
	constructor(line) {
		super();
		this.throwError(line, "Undefined Input Name");
	}
}
class StateAlreadyDefinedError extends ErrorManagement {
	/**
	 * State Already Defined Error
	 *
	 * @constructor
	 *
	 * @param {String}
	 */
	constructor(state) {
		super();
		this.throwError(state, "State Already Defined");
	}
}
const defineGlobals = () => {
	global.UndefinedTypeError = UndefinedTypeError;
	global.ExpectedTokenError = ExpectedTokenError;
	global.MissingVarError = MissingVarError;
	global.DuplicateComponentError = DuplicateComponentError;
	global.UndefinedComputedError = UndefinedComputedError;
	global.UndefinedMethodError = UndefinedMethodError;
	global.UndefinedStateError = UndefinedStateError;
	global.ExpectedAttributeError = ExpectedAttributeError;
	global.UndefinedInputNameError = UndefinedInputNameError;
	global.StateAlreadyDefinedError = StateAlreadyDefinedError;
};

export default defineGlobals;
