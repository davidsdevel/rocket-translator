const { ReactStateManagement, VueStateManagement, AngularStateManagement } = require("./StateManagement");
const Parser = require("./JavascriptManagement");
const setErrorHandler = require("./ErrorManagement");

/**
 * Array of Main Component's Components.
 *
 */
var Components = [];


/**
 * React Compiler
 * 
 * Function that take the HTML string and traslate that to Vue
 * 
 * @param {string} name The Component Name
 * @param {string} html The HTML String
 * @param {string} css The CSS String
 * @param {string} js The Javascript String
 *
 * @return {string}
 */
const ReactCompiler = (name, html, css, js) => {

	let RStateManagement = new ReactStateManagement();

	let parse = new Parser(js); //JS Parser

	//Get all data from HTML string
	RStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	RStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	RStateManagement.getJsData(parse.functions, "r");

	RStateManagement.watchers = parse.watchers;

	RStateManagement.setVarsToStatesContent(parse.vars);

	Components = RStateManagement.componentsContent;

	//Add new lines and idents to code beauty
	let pretty = RStateManagement
		.filterHTML(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t\t\t${e}\n`;
		})
		.join("");
		
	//Template to Set All Data
	let template =
`import React, {Component} from "react"
${RStateManagement.importComponents}
class ${name || "MyComponent"} extends Component {
	${RStateManagement.componentData}
	render(){
		${RStateManagement.prerenderLogical}
		return(
${pretty}\t\t)
	}
}
export default ${name || "MyComponent"};
`;
	return template;
};


/**
 * Vue Translator
 * 
 * Function that take the HTML string and traslate that to Vue
 *
 * @param {string} html The HTML String 
 * @param {string} css The CSS String
 * @param {string} js The Javascript String
 * @return {string}
 */
const VueCompiler = (name, html, css, js) => {

	let VStateManagement = new VueStateManagement();

	let parse = new Parser(js); //JS Parser

	// Set Styles
	let style = css !== "" ? `<style scoped>\n${css}</style>` : "";

	//Get all data from HTML string
	VStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	VStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	VStateManagement.getJsData(parse.functions, "v");

	VStateManagement.watchers = parse.watchers;

	VStateManagement.setVarsToStatesContent(parse.vars);
	
	Components = VStateManagement.componentsContent;

	
	//Add new lines and idents to code beauty
	let pretty = VStateManagement
		.filterHTML(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t${e}\n`;
		})
		.join("");
	
	//Template to Set All Data
	let component = 
`<template>
${pretty}
</template>
${VStateManagement.componentData(name)}
${style}`;

	return component;
};

const AngularCompiler = (name, html, css, js) => {

	let AStateManagement = new AngularStateManagement();

	let parse = new Parser(js); //JS Parser

	let style; // Declare empty var to asign styles

	//If param 'css' is not empty, set style tags to final render 
	css !== "" ? style = `<style scoped>\n${css}</style>` : style = "";

	//Get all data from HTML string
	AStateManagement.getHTMLString(html);

	//Get states declarations from JS and set to Data
	AStateManagement.statesFromJS = parse.states;

	//Get Methods from JS and set to Data
	AStateManagement.getJsData(parse.functions, "v");

	AStateManagement.watchers = parse.watchers;

	AStateManagement.setVarsToStatesContent(parse.vars);
	
	Components = AStateManagement.componentsContent;
	/*
Component Template


import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}

*/
	console.log(AStateManagement.componentData);
	process.exit(1);
};

exports.setErrorHandler = setErrorHandler;
exports.Components = Components;
exports.VueCompiler = VueCompiler;
exports.AngularCompiler = AngularCompiler;
exports.ReactCompiler = ReactCompiler;
