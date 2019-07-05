const {AngularCompiler, VueCompiler, ReactCompiler} = require("./core");
const {join} = require("path");
const {writeFileSync} = require("fs");
const FF = require("./file-functions");
const clc = require("cli-color");

/**
 * Show Errors
 *
 * @description Show errors, if have compile errors
 * @public
 */
function showErrors() {
	const errorKeys = Object.keys(global.Errors);
	const warningKeys = Object.keys(global.Warnings);

	if (errorKeys.length > 0) {
		console.log(clc.redBright("\nError!!!"));
		errorKeys.forEach(key => {
			console.log(clc.whiteBright(`\n${key}:\n`));
			global.Errors[key].forEach(line => {
				console.log(line);
			});
		});
		process.exit(1);
	}
	if (warningKeys.length > 0) {
		console.log(clc.yellowBright("\nWarning!!!"));
		warningKeys.forEach(key => {
			console.log(clc.whiteBright(`\n${key}:\n`));
			global.Errors[key].forEach(line => {
				console.log(line);
			});
		});
	}
}
/**
 * File Content
 *
 * @description Function that get filepath and return name, css, and html; and set JS as Global
 * @public
 *
 * @param {String} filepath
 *
 * @return {Object<html: String, css: String, name: String>}
 */
function fileContent(filepath) {
	const functions = new FF();

	functions.setParams(filepath, "");

	const componentName = filepath.match(/((\w*-)*\w*|\w*)(?=.html$)/); //Get the name from the file

	const name = componentName[0].split("-").map(e => {
		return e[0].toUpperCase() + e.slice(1);
	}).join(""); //convert to CamelCase
		
	const html = functions.getFile(); //Get the html file data
	const js = functions.getJs(); //Get the JS file data
	const css = functions.getCSS(); //Get the CSS file data

	functions.filterJavascriptDataFile(js);

	return {
		html,
		css,
		name
	};
}

class API {
	/**
	 * Generate
	 *
	 * @description Static method that compile with a String code
	 * @static
	 * @public
	 * 
	 * @param {String} code
	 * @param {Object} options
	 *
	 * @return {Object<main: String, components: Array>}
	 */
	static generate(code, options) {
		const path = join(process.env.TEMP, "temp.html");

		global.RocketTranslator = options;
		global.Errors = new Object();
		global.Warnings = new Object();
		global.translatorFilePath = path; //Define Global Path to error management

		writeFileSync(path, code);

		const {html, css} = fileContent(path);

		var compiler;
		switch(options.mode) {
		case "vue":
			compiler = VueCompiler;
			break;
		case "react":
			compiler = ReactCompiler;
			break;
		case "angular":
			compiler = AngularCompiler;
			break;
		default:
			throw new Error("Mode is not defined");
		}

		const data = compiler("MyComponent", html, css);

		showErrors();

		return data;
	}
	/**
	 * Generate from File
	 *
	 * @description Static method that compile from a file
	 * @static
	 * @public
	 *
	 * @param {String} filePath
	 * @param {Object} options
	 *
	 * @return {Object<main: String, components: Array>}
	 */
	static generateFromFile(filePath, options) {
		const mainFilePath = module.parent.filename.replace(/\\\w*(\.\w*)*$/, "");
		const path = join(mainFilePath, filePath);

		global.RocketTranslator = options;
		global.Errors = new Object();
		global.Warnings = new Object();
		global.translatorFilePath = path; //Define Global Path to error management

		const {html, css, name} = fileContent(path);

		var compiler;
		switch(options.mode) {
		case "vue":
			compiler = VueCompiler;
			break;
		case "react":
			compiler = ReactCompiler;
			break;
		case "angular":
			compiler = AngularCompiler;
			break;
		default:
			throw new Error("Mode is not defined");
		}

		const data = compiler(name, html, css);
		
		showErrors();
		
		return data;
	}
}

module.exports = API;
