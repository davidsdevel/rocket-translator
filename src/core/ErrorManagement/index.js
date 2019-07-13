const FileUtils = require("../../commons/file");
const clc = require("cli-color");
const events = require("../../const/Events.json");

const {readFileAsString} = FileUtils;

const RegExpSanitize = string => {
	return string
		.replace(/\+/, "\\+")
		.replace(/\*/, "\\*")
		.replace(/\//, "\\/");
};

class ErrorManagement {
	constructor() {
		let file = readFileAsString(global.translatorFilePath);
		this.lines = file.split(/\r\n|\n|\r/);
	}
	/**
	 * Throw Error
	 * 
	 * Get the Component data and throw a new Error
	 * 
	 * @protected
	 *
	 * @param {String} data 
	 * @param {String} type Error Type
	 */
	throwError(data, type) {
		var stringToMatch;
		var name;
		switch(type) {
		case "Missing Var":
			stringToMatch = `{${data.stateName}\\s*-\\s*state\\s*-\\s*${data.varName}}`;
			name = data.varName;
			break;
		case "Duplicate Component":
			stringToMatch = `<component component-name=('|")${data}('|")`;
			name = data;
			break;
		case "Undefined Method":
			stringToMatch = `on(${events.join("|")})=('|")${data}.*('|")`;
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
		if (!global.Errors[type])
			global.Errors[type] = [];

		this.lines.forEach((line, i) => {
			const match = new RegExp(stringToMatch).test(line);
			if (match) {
				global.Errors[type].push(`-> ${clc.whiteBright(name)} on line: ${i+1}\n${clc.redBright(`${i}|`)}${clc.red(`${this.lines[i-1]}\n`)}${clc.redBright(`${i+1}|${this.lines[i]}\n`)}${clc.redBright(`${i+2}|`)}${clc.red(`${this.lines[i+1]}\n`)}`);
			}
		});
	}
	/**
	 * Throw Warning
	 * 
	 * Get the Component data and throw a new Warning
	 * 
	 * @protected
	 *
	 * @param {String} data 
	 * @param {String} type Error Type
	 */
	throwWarning(data, type) {
		var stringToMatch;
		var name;

		switch(type) {
		case "Lifecycle Is Not Used":
			stringToMatch = `(var|let|const|function)\\s*${data.name}`;
			// eslint-disable-next-line prefer-destructuring
			name = data;
			type = `Lifecycle Is Used Only on ${data.target}`;
			break;
		}
		if (!global.Warnings[type])
			global.Warnings[type] = [];

		this.lines.forEach((line, i) => {
			const match = new RegExp(stringToMatch).test(line);
			if (match) {
				global.Warnings[type].push(`-> ${clc.whiteBright(name)} on line: ${i+1}\n${clc.yellowBright(`${i}|`)}${clc.yellow(`${this.lines[i-1]}\n`)}${clc.yellowBright(`${i+1}|${this.lines[i]}\n`)}${clc.yellowBright(`${i+2}|`)}${clc.yellow(`${this.lines[i+1]}\n`)}`);
			}
		});
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
		const {type, name, condition, content: cont} = data;
		const content = RegExpSanitize(cont);
		var stringToMatch;
		switch(type) {
		case "conditional":
			stringToMatch = `<(if|else-if)\\s*cond=('|")${condition}`;
			break;
		case "loop":
			stringToMatch = `<for\\s*val=('|")\\.*\\s*in\\s*${name}('|")`;
			break;
		case "watcher":
			stringToMatch = `${name}(.*)\\s*\\{`;
			break;
		case "function":
			stringToMatch = `on(${events.join("|")})\\s*=\\s*('|")${content}('|")`;
			break;
		default: 
			stringToMatch = type;
			break;
		}
		this.throwError({name, string: stringToMatch}, "Undefined State");
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
class LifecycleIsNotUsed extends ErrorManagement {
	constructor(name, target) {
		super();
		this.throwWarning({name, target}, "Lifecycle Is Not Used");
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
	global.LifecycleIsNotUsed = LifecycleIsNotUsed;
};

module.exports = defineGlobals;
