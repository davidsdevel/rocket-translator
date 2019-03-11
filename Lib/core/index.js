const { ReactStateManagement, VueStateManagement, AngularStateManagement } = require("./StateManagement");
const Parser = require("./JavascriptManagement");

/**
 * Array of Main Component's Components.
 */
var Components = [];

/**
 * React Compiler
 * 
 * Function that take the HTML string and translate to React
 * 
 * @param {string} name Component Name
 * @param {string} html HTML String
 * @param {string} css CSS String
 *
 * @return {string}
 */
const ReactCompiler = (name, html, css) => {

	let RStateManagement = new ReactStateManagement();

	let parse = new Parser(); //JS Parser

	//Get all data from HTML string
	RStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	RStateManagement.setLifecycle(parse.lifecycles, "r");

	RStateManagement.getHTMLString(html);	

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
 * Function that take the HTML string and translate to Vue
 *
 * @param {String} name Component Name
 * @param {string} html HTML String 
 * @param {string} css CSS String
 * 
 * @return {string}
 */
const VueCompiler = (name, html, css) => {

	let VStateManagement = new VueStateManagement();

	let parse = new Parser(); //JS Parser

	// Set Styles
	let style = css !== "" ? `<style scoped>\n${css}</style>` : "";

	//Get states declarations from JS and set to Data
	VStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	VStateManagement.setLifecycle(parse.lifecycles, "v");

	//Get all data from HTML string
	VStateManagement.getHTMLString(html);

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
`<template>\n${pretty}</template>
${VStateManagement.componentData(name)}
${style}`;

	return component;
};

/**
 * Angular Translator
 * 
 * Function that take the HTML string and translate to Angular
 *
 * @param {String} name Component Name
 * @param {string} html HTML String 
 * @param {string} css CSS String
 * 
 * @return {string}
 */
const AngularCompiler = (name, html, css, js) => {

	const AStateManagement = new AngularStateManagement();

	const parse = new Parser(); //JS Parser

	// Set Styles
	let style = css !== "" ? `<style scoped>\n${css}</style>` : "";

	//Get states declarations from JS and set to Data
	AStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	AStateManagement.setLifecycle(parse.lifecycles, "a");

	//Get all data from HTML string
	AStateManagement.getHTMLString(html);

	//Get Methods from JS and set to Data
	AStateManagement.getJsData(parse.functions, "a");
	
	AStateManagement.watchers = parse.watchers;
	
	AStateManagement.setVarsToStatesContent(parse.vars);
	
	Components = AStateManagement.componentsContent;
	
	//Add new lines and idents to code beauty
	let pretty = AStateManagement
		.filterHTML(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t${e}\n`;
		})
		.join("");
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

	const component = `import { Component ${AStateManagement.props.length > 0 ? ", Input" : ""}} from '@angular/core';

${AStateManagement.components.map(e => `import { ${e} } from "./components/${e}";`)}

@Component({
	selector: '${AStateManagement.generateComponentName(name)}-root',
	template:\`${pretty}\`
})

export class ${name} {
	${AStateManagement.componentData}
}`;
	return component;
};

exports.Components = Components;
exports.VueCompiler = VueCompiler;
exports.AngularCompiler = AngularCompiler;
exports.ReactCompiler = ReactCompiler;
