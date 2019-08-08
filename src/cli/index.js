//Const
const { 
	VueCompiler,
	ReactCompiler,
	AngularCompiler
} = require("../core");
const FF = require("../file-functions");
const clc = require("cli-color");
const {version} = require("../../package.json");

const functions = new FF();

/**
 * CLI
 * 
 * Initialize and Handle the Command Line Interface (CLI)
 * 
 * @class
 */
class CLI {
	/**
	 * CLI
	 * 
	 * @constructor
	 * @param {Object} options 
	 */
	constructor({entry, output, mode, options}) {
		this.entry = entry;
		this.output = output;
		this.mode = mode;

		/**
		 * Define Initial CLI Options
		 */
		global.RocketTranslator = {
			ignoreInputName: false,
			jsx: false,
			allowSSR: false,
			mode
		};

		options.forEach(option => {
			switch(option) {
			case "--ignore-input-name":
				global.RocketTranslator.ignoreInputName = true;
				break;
			case "--jsx":
				global.RocketTranslator.jsx = true;
				break;
			case "--allow-ssr":
				global.RocketTranslator.allowSSR = true;
				break;
			default: break;
			}
		});

		global.Errors = new Object(); //Init Errors Counter
		global.Warnings = new Object();

		if (this.entry === "not-file") {
			console.log(clc.redBright("\nError!!!\n"));
			console.log(clc.whiteBright("Please select a file to compile."));
			return;
		}

		functions.setParams(entry, output);
		this.handleMode();
	}
	/**
	 * Handle Mode
	 * 
	 * Get compiler mode and then call respective compiler.
	 * If not have valid compiler throw Invalid Mode Error
	 * 
	 * @public
	 */
	handleMode() {
		switch(this.mode) {
		case "vue":
			this.compile("vue");
			break;
		case "react":
			this.compile("react");
			break;
		case "angular":
			this.compile("angular");
			break;
		default:
			this.invalidMode();
			break;
		}
	}
	/**
	 * Compile
	 * 
	 * Execute a Compiler corresponding with mode
	 * 
	 * @param {String} mode 
	 */
	compile(mode) {
		const {html, css, name} = this.fileContent;

		var compiler;
		switch(mode) {
		case "vue":
			compiler = VueCompiler;
			break;
		case "react":
			compiler = ReactCompiler;
			break;
		case "angular":
			compiler = AngularCompiler;
			break;
		default: break;
		}

		const {main, components} = compiler(name, html, css);

		const errorKeys = Object.keys(global.Errors);

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

		functions.writeFile({
			name,
			content:main,
			type:mode
		});

		functions.writeComponents(name, mode, components);
		
		this.sayThanks();
	}
	/**
	 * Show Help
	 * 
	 * Show help Window
	 * 
	 * @static
	 * @public
	 */
	static showHelp() {
		//Help Commands
		console.log(`\nUsage:	rocket <command> <filename> <output-folder>
	rocket <command> [options] <filename> <output-folder>
	rocket <command> [options] <filename>
	rocket <command> <filename>
	rocket [option]


Commands:
  ${clc.whiteBright("react")}			Translate to React
  ${clc.whiteBright("vue")}			Translate to Vue
  ${clc.whiteBright("angular")}		Translate to Angular

Options:
  ${clc.whiteBright("--ignore-input-name")}	Ignore filtering of name attribute on inputs
  ${clc.whiteBright("--jsx")}			Build with JSX format
  ${clc.whiteBright("--allow-ssr")}		Build with SSR Frameworks support

  ${clc.whiteBright("--help, -h")}		Show help
  ${clc.whiteBright("--version, -v")}		Show version number`);
	}
	/**
	 * Show Version
	 * 
	 * @static
	 * @public
	 */
	static showVersion() {
		console.log(`v${version}`);
	}
	/**
	 * Invalid Mode
	 * 
	 * Show a Message with the invalid Mode
	 * 
	 * @static
	 * @public
	 *
	 * @param {String} mode 
	 */
	static invalidMode(mode) {
		console.log(clc.redBright("\nError!!!\n"));
		console.log(clc.redBright(`Invalid Mode ${clc.whiteBright(`"${mode}"`)}`));
	}
	/**
	 * File Content Getter
	 * 
	 * @return {Object}
	 */
	get fileContent() {
		const componentName = this.entry.match(/((\w*-)*\w*|\w*)(?=.html$)/); //Get the name from the file

		const name = componentName[0].split("-").map(e => {
			return e[0].toUpperCase() + e.slice(1);
		}).join(""); //convert to CamelCase
		
		const html = functions.file; //Get the html file data
		const js = functions.JS; //Get the JS file data
		const css = functions.CSS; //Get the CSS file data

		functions.filterJavascriptDataFile(js);

		return {
			html,
			css,
			name
		};
	}
	/**
	 * Say Thanks
	 * 
	 * Show a Thanks Message to invite to follow on my Social Networks
	 * 
	 * @public
	 */
	sayThanks() {
		const warningKeys = Object.keys(global.Warnings);

		if (warningKeys.length > 0) {
			var warningMessage = "";
			var warningCount = 0;

			warningKeys.forEach(key => {
				warningMessage += clc.whiteBright(`\n${key}:\n`);
				global.Warnings[key].forEach(line => {
					warningMessage += `\n${line}`;
					warningCount++;
				});
			});

			console.log(clc.yellowBright(`\nWarning!!! Compiled with ${clc.white(warningCount)} issues`));
			console.log(`${warningMessage}\n`);
		}
		else
			console.log(clc.greenBright("\nSuccess...\n"));

		console.log(`Thanks for use ${clc.whiteBright("Rocket Translator")}.\n\nOpen ${clc.whiteBright(this.output)} to view your files.`);

		console.log(`\nSend a feedback to ${clc.whiteBright("@davidsdevel")} on Twitter.\n\nTo report a Error, open a new issue on:\n${clc.whiteBright("https://github.com/davidsdevel/rocket-translator")}`);
	}
}

module.exports = CLI;
