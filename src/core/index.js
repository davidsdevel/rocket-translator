const { ReactStateManagement, VueStateManagement, AngularStateManagement } = require("./StateManagement");
const Parser = require("./JavascriptManagement");
const {transform} = require("babel-core");

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
// eslint-disable-next-line no-unused-vars
const ReactCompiler = (name, html, css) => {

	const RStateManagement = new ReactStateManagement();

	const parse = new Parser(); //JS Parser

	//Get all data from HTML string
	RStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	RStateManagement.setLifecycle(parse.lifecycles);

	RStateManagement.getHTMLString(html);	

	RStateManagement.externalComponents = parse.components;
	
	//Get Methods from JS and set to Data
	RStateManagement.getJsData(parse.functions);

	RStateManagement.watchers = parse.watchers;

	RStateManagement.setVarsToStatesContent(parse.vars);

	const JSX = RStateManagement.filterHTML(html);
		
	//Template to Set All Data
	var template =
`import React, {Component} from "react";
${RStateManagement.importComponents}
class ${name || "MyComponent"} extends Component {
	${RStateManagement.componentData}
	render(){
		${RStateManagement.preRender}
		return(
			${JSX}
		)
	}
}
export default ${name || "MyComponent"};
`;

	template = transform(template, {
		plugins: ["babel-plugin-syntax-jsx"]
	}).code;

	return {
		main:template,
		components:RStateManagement.componentsContent
	};
};

/**
 * Vue Compiler
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

	const VStateManagement = new VueStateManagement();

	const parse = new Parser(); //JS Parser

	// Set Styles
	const style = css !== "" ? `\n<style scoped>\n${css}</style>` : "";

	//Get states declarations from JS and set to Data
	VStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	VStateManagement.setLifecycle(parse.lifecycles);

	//Get all data from HTML string
	VStateManagement.getHTMLString(html);

	VStateManagement.externalComponents = parse.components;

	//Get Methods from JS and set to Data
	VStateManagement.getJsData(parse.functions);
	
	VStateManagement.watchers = parse.watchers;
	
	VStateManagement.setVarsToStatesContent(parse.vars);

	var HTML = "";
	
	if (!global.RocketTranslator.jsx) {

		//Add new lines and idents to code beauty
		const pretty = VStateManagement
			.filterHTML(html)
			.split(/\n/)
			.map(e => {
				if (e) return `\t${e}\n`;
			})
			.join("");

		HTML = `<template>\n${pretty}</template>\n`;
		
	}
	//Template to Set All Data
	let component = 
`${HTML}${VStateManagement.componentData(name, html)}${style}`;

	return {
		main:component,
		components:VStateManagement.componentsContent
	};
};

/**
 * Angular Compiler
 * 
 * Function that take the HTML string and translate to Angular
 *
 * @param {String} name Component Name
 * @param {string} html HTML String 
 * @param {string} css CSS String
 * 
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
const AngularCompiler = (name, html, css) => {

	const AStateManagement = new AngularStateManagement();

	const parse = new Parser(); //JS Parser

	//Get states declarations from JS and set to Data
	AStateManagement.statesFromJS = parse.states;

	//Parse Lifecycles
	AStateManagement.setLifecycle(parse.lifecycles);

	//Get all data from HTML string
	AStateManagement.getHTMLString(html);

	//Get Methods from JS and set to Data
	AStateManagement.getJsData(parse.functions);

	AStateManagement.externalComponents = parse.components;

	AStateManagement.watchers = parse.watchers;
	
	AStateManagement.setVarsToStatesContent(parse.vars);
	
	//Add new lines and idents to code beauty
	const pretty = AStateManagement
		.filterHTML(html)
		.split(/\n/)
		.map(e => {
			if (e) return `\t${e}\n`;
		})
		.join("");

	const component = `import { Component${AStateManagement.props.length > 0 ? ", Input" : ""}} from '@angular/core';
${AStateManagement.components.map(e => `\nimport { ${e} } from "./components/${e}";`).join("")}

@Component({
	selector: '${AStateManagement.generateComponentName(name)}-root',
	template:\`${pretty}\`
})

export class ${name} {
	${AStateManagement.componentData}
}`;
	return {
		main:component,
		components:AStateManagement.componentsContent
	};
};

module.exports = {
	VueCompiler,
	AngularCompiler,
	ReactCompiler
};
