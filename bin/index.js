#!/usr/bin/env node

process.title = "Rocket Translator"; //Process Title

const CLI = require("../src/cli"); //CLI Interface Module
const clc = require("cli-color");

const {join} = require("path");
const cliDir = process.cwd();


function initCLI() {
	const data = process.argv.filter(e => !e.startsWith("-"));
	const options = process.argv.filter(e => e.startsWith("-"));

	const mode = data[2] || process.argv[2]; //Get the mode to compile

	if (!mode || mode === "-h" || mode === "--help")
		CLI.showHelp();
	
	else if (mode === "-v" || mode === "--version")
		CLI.showVersion();
	
	else {
		if (mode !== "vue" && mode !== "react" && mode !== "angular") {
			CLI.invalidMode(mode);
			return;
		}

		let filePath = data[3] ? join(cliDir, data[3]) : "not-file"; //Get the file path
		
		global.translatorFilePath = filePath; //Define Global Path to error management
	
		//Dirname for the output folder
		const output = data[4] ? join(cliDir, data[4]) : join(cliDir, "dist");
	
		//Init CLI
		new CLI({
			mode,
			entry:filePath,
			output,
			options
		});
	}
}

initCLI();
