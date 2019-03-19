//Const
const { 
	VueCompiler,
	ReactCompiler,
	AngularCompiler
} = require("../Lib/core");
const {unlinkSync} = require("fs");
const FF = require("../Lib/file-utils/TranslatorFileFunctions");
const clc = require("cli-color");

const functions = new FF();

class CLI {
	constructor({entry, output, mode}) {
		this.entry = entry;
		this.output = output;
		this.mode = mode;

		if (this.entry === "not-file") {
			console.log(clc.redBright("\nError!!!\n"));
			console.log(clc.whiteBright("Please select a file to compile."));
			process.exit(1);
		}

		functions.setParams(entry, output);
		this.handleMode();
	}
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
	compile(mode) {
		
		let {html, css, js, name} = this.fileContent;

		functions.filterJavascriptDataFile(js);

		let compiler;
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
		functions.writeFile({
			name,
			content:main,
			type:mode
		});
		functions.writeComponents(name, mode, components);
		this.sayThanks();
	}
	static showHelp() {
		//Help Commands
		console.log(
	`	Usage: rocket [vue | react] <input-file> <output-folder>

    	Commands:
        Translate to React:		react
        Translate to Vue:		vue
        Translate to Angular:		angular 

        Help:				--help | -h
        Version:			--version | -v`
		);
	}
	static showVersion() {
		let {version} = require("../package.json");
		console.log(`v${version}`);
	}
	static invalidMode(mode) {
		console.log(clc.redBright("\nError!!!\n"));
		console.log(clc.redBright("Invalid Mode "+clc.whiteBright(`"${mode}"`)));
	}
	get fileContent() {
		let componentName = this.entry.match(/((\w*-)*\w*|\w*)(?=.html$)/); //Get the name from the file

		let name = componentName[0].split("-").map(e => {
			return e[0].toUpperCase() + e.slice(1);
		}).join(""); //convert to CamelCase
		
		let html = functions.getFile(); //Get the html file data
		let js = functions.getJs(); //Get the JS file data
		let css = functions.getCSS(); //Get the CSS file data

		return {
			html,
			css,
			js,
			name
		}
	}
	sayThanks() {
		console.log(clc.greenBright("\nSuccess...\n"));
		console.log(`Thanks for use ${clc.whiteBright("Rocket Translator")}.\n\nOpen ${clc.whiteBright(this.output)} to view your files.`);
		console.log(`\nSend a feedback to ${clc.whiteBright("@David_Devel")} on Twitter.\n\nTo report a Error, open a new issue on:\n${clc.whiteBright("https://github.com/Davids-Devel/rocket-translator")}`);
		unlinkSync(global.defineGlobals);
		unlinkSync(global.tempDataFile);
	}
}

module.exports = CLI;
