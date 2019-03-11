#!/usr/bin/env node

process.title = "RocketJS"; //Process Title

const CLI = require("./CLI"); //CLI Interface
const clc = require("cli-color");

const {join} = require("path");
const {realpathSync} = require("fs");
const cliDir = realpathSync(".");

const mode = process.argv[2]; //Get the mode to compile

if (!mode || mode === "-h" || mode === "--help")
	CLI.showHelp();

else if (mode === "-v" || mode === "--version")
	CLI.showVersion();

else {
	if (mode !== "vue" && mode !== "react" && mode !== "angular")
		CLI.invalidMode(mode);

	let filePath = process.argv[3] ? join(cliDir, process.argv[3]) : "not-file"; //Get the file path
	
	global.translatorFilePath = filePath; //Define Global Path to error management

	//Dirname for the output folder
	const output = process.argv[4] ? join(cliDir, process.argv[4]) : join(cliDir, "dist");

	//Init CLI
	new CLI({
		mode,
		entry:filePath,
		output
	});
}
