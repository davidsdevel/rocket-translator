const defineErrors = require("../ErrorManagement"); //Define Error Management Globals
const globalList = require("../../const/Globals");
const events = require("../../const/Events");
const {parse} = require("babylon");

defineErrors(); 

/**
 * State Management Base Class
 * 
 * Class that manage HTML String and get all data from these
 * 
 * @class
 */
class StateManagement {
	constructor() {
		//Initialize Data arrays
		this._states = new Array();
		this._computed = new Array();
		this._methods = new Array();
		this._components = new Array();
		this._watchers = new Array();
		this._props = new Array();
		this._handleInputs = false;
		this._conditionals = new Array();
		this._loops = new Array();
		this._lifecycle = new Array();
		
		this._regExpToMatchState = /^\w*\s*-\s*state$/g; //RegExp to get State With Declaration
		this._regExpToMatchStateWithValue = /^\w*\s*-\s*state\s*-\s*.*$/g; //RegExp to get State With Value
		this._regExpToMatchComputed = /^\w*\s*-\s*computed/g; //RegExp to get Computed Methods
		this._regExpToMatchProps = /^\w*\s*-\s*prop/g; //RegExp to get Props
		
		this.componentsContent = new Array();
		this._styles = undefined;
	}

	//--------------- Public Methods -----------------
	set styles(css) {
		this._styles = css;
	}
	get styles() {
		if (this._styles) {
			if (global.RocketTranslator.mode === "react")
				return `<style jsx>{\`${this._styles}\`}</style>`;
		}

		return "";
	}
	/**
	 * Get HTML String
	 * 
	 * Get Get All Data From HTML
	 * 
	 * @public
	 * @param {string} html
	 */
	getHTMLString(html){
		this._setDataFromHTML(html); //Call Method to Get Data from HTML String
	}
	/**
	 * Get Js Data
	 * 
	 * Get Js Methods from the Js File and Set to Methods Contents
	 * 
	 * @public
	 * @param {Array} JSParsed JS Content Array From JS Parser
	 */
	getJsData(JSParsed) {
		if (JSParsed.length > 0) {
			this._filterJS(JSParsed).forEach(e => {
				//Map Methods
				this.methods.forEach((method, i) => {
					if (/^async/.test(e.name)) {
						if (e.name === `async ${method.name}`) {
							this._methods[i] = { 
								content: e.content,
								name: e.name
							};
						}
					} else {
						if (e.name === method.name)
							this._methods[i].content = e.content;
					}
				});
				//Map Computed
				this.computed.forEach(({name}, i) => {
					if (/^async/.test(e.name)) {
						if (e.name === `async ${name}`) {
							this._computed[i] = { 
								content: e.content,
								name: e.name
							};
						}
					} else {
						if (e.name === name)
							this._computed[i].content = e.content;
					}
				});

			});
		}
		/*Error Handle*/
		this.methods.forEach(({content, name}) => {
			if(!content) new global.UndefinedMethodError(name);
		});
		this.computed.forEach(({content, name}) => {
			if(!content) new global.UndefinedComputedError(name);
		});
	}
	/**
	 * Set Vars
	 * 
	 * Get Vars from JS Parsed and set the value in the corresponding state
	 * 
	 * @public
	 * @param {Array} VarsArray 
	 */
	setVarsToStatesContent(VarsArray){
		if (VarsArray.length > 0) {
			//Map Vars Array
			this.states.forEach((state, i) => {
				if (typeof state === "object") {
					const {value:val} = state;
					//If match replace the corresponding state
					if (VarsArray.length > 0) {
						VarsArray.forEach(({name, value}) => {
							if (val.var) {
								if (val.var === name) {
									this._states[i] = {
										key:state.key,
										value:value
									};
								}
								else new global.MissingVarError(state.key, val.var);
							}
						});
					} else {
						if (typeof val === "object" && val.var)
							new global.MissingVarError(state.key, val.var);
					}
				}
			});
		}
	}
	/**
	 * Set States
	 * 
	 * Get States from JS Parsed and set to Component States
	 * 
	 * @public
	 * @param {Array} statesArray Array with all states from JS Parser
	 */
	set statesFromJS(statesArray){
		this._states = new Array();
		this._computed = new Array();
		this._methods = new Array();
		this._components = new Array();
		this._watchers = new Array();
		this._props = new Array();
		this._handleInputs = false;
		this._conditionals = new Array();
		this._loops = new Array();
		this._lifecycle = new Array();

		if (statesArray) {
			this._states = statesArray;
		}
	}
	/**
	 * Setter Watcher
	 * 
	 * Get State Watchers from JS Parsed and set to Component Watchers
	 * 
	 * @public
	 * @param {Array} watchersArray 
	 */
	set watchers(watchersArray){
		if (watchersArray) {
			watchersArray.forEach(({name}) => {
				var count = 0;
				this.states.forEach(state => {
					const key = typeof state === "object" ? state.key : state;
					if (key === name) count++;
				});
				this.props.forEach(prop => {
					if (prop === name) count++;
				});
				if (count === 0) {
					new global.UndefinedStateError({type:"watcher", name});
				}
			});
			this._watchers = watchersArray;
		}
	}
	/**
	 * Getter Watchers
	 * 
	 * @public
	 * 
	 * @return {Array}
	 */
	get watchers(){
		return this._watchers;
	}

	/**
	 * Lifecycle Setter
	 * 
	 * @public
	 * @param {Array} lifecycles
	 * @param {String} type
	 * 
	 * @return {Object}
	 */
	setLifecycle(lifecycles) {
		if (lifecycles.length > 0) {
			const jsFiltered = this._filterJS(lifecycles);

			this._lifecycle = jsFiltered.map(({name, content}) => {
	
				if (global.RocketTranslator.mode === "react") {
					switch(name) {
					case "unmounted":
						new global.LifecycleIsNotUsed(name, "Angular and Vue");
						break;
					case "beforeMount":
						name = "componentWillMount";
						break;
					case "mounted":
						name = "componentDidMount";
						break;
					case "beforeUpdate":
						name = "componentWillUpdate";
						break;
					case "updated":
						name = "componentDidUpdate";
						break;
					case "checkUpdate":
						name = "componentShouldUpdate";
						break;
					case "beforeUnmount":
						name = "componentWillUnmount";
						break;
					default: break;
					}
				} else if (global.RocketTranslator.mode === "veact") {
					switch(name) {
					case "checkUpdate":
						new global.LifecycleIsNotUsed(name, "Angular and React");
						break;

					case "beforeMount":
					case "mounted":
					case "beforeUpdate":
					case "updated":
						break;

					case "beforeUnmount":
						name = "beforeDestroy";
						break;
					case "unmounted":
						name = "destroyed";
						break;

					default: break;
					}
				} else if (global.RocketTranslator.mode === "aeact") {
					switch(name) {
					case "beforeMount":
					case "beforeUpdate":
					case "beforeUnmount":
						new global.LifecycleIsNotUsed(name, "Vue and React");
						break;
					case "mounted":
						name = "ngOnInit";
						break;
					case "updated":
						name = "ngOnChanges";
						break;
					case "unmounted":
						name = "ngOnDestroy";
						break;
					case "checkUpdate":
						name = "ngDoCheck";
						break;
					default: break;
					}
				}
				return {
					name,
					content
				};
			});
		}
	}
	/**
	 * Lifecycle Getter
	 * 
	 * @public
	 * @return {Array}
	 */
	get lifecycle() {
		return this._lifecycle;
	}
	/**
	* Components Setter
	* 
	* @public
	* @param {string} html 
	*/
	set components(html){
		const _matchComponents = html.match(/<([A-Z]\w*).*\/>/g); //Match Components
		if (Array.isArray(_matchComponents)) {
			_matchComponents.forEach(e => {
				const name = e.match(/[A-Z]\w*/g)[0]; //Get Component Name
				this._components.push({name, type: "internal"});
			});
			this._components.forEach(({name}) => {
				this._components = this._components.filter(({name:innerName}) => name !== innerName);
			});
		}

		const splitComponentWithContent = html.split("<component ");
		splitComponentWithContent.forEach((e, i) => {
			if (i > 0) {
				const name = e.match(/component-name\s*=\s*('|")\w*/)[0].replace(/component-name\s*=\s*("|')/, "");
				const content = e.replace(/.*>(\r\n|\n|\r)/, "").split(/(\r\n|\n|\r)*\t*<\/component>/)[0];

				this._components.push({name, type: "internal"});
				
				this.componentsContent.push({
					name,
					content
				});
			}
		});
		this.componentsContent.forEach(({name}) => {
			var duplicates = 0;
			this.componentsContent.forEach(ev => {
				if (name === ev.name) duplicates++;
			});
			if (duplicates > 1) {
				new global.DuplicateComponentError(name);
			}			
		});
	}
	set externalComponents(data) {
		this._components.concat(data);
	}
	/**
	 * Components Getter
	 * 
	 * @public
	 * 
	 * @return {Array}
	 */
	get components() {
		return this._components;
	}
	/**
	 * Computed Setter
	 * 
	 * @public
	 * @param {array} dataArray Array With All Data
	 */
	set computed(dataArray){
		var _computedArray = []; //Declare Empty Array

		//Map Array to get computed methods
		dataArray.forEach(e => {
			const _computedMatched = e.match(this._regExpToMatchComputed);
			//If Match push to empty array
			if (Array.isArray(_computedMatched)) {
				//This must match something like: {Name - computed}
				_computedArray.push(_computedMatched[0]);
			}
		});

		//If have matched computed push to Component Computed
		if (_computedArray.length > 0) {
			var computedList = ["1234"];

			_computedArray = _computedArray.filter(e => {
				var duplicate = false;
				computedList.forEach(ev => {
					if (e.name === ev) duplicate = true;
					else computedList.push(e.name);
				});
				if (!duplicate) return e;
			});
			_computedArray.forEach(e => {
				this._computed.push({
					name:e.match(/^\w*/g)[0],
					content:null
				});
			});
		}
	}
	/**
	 * Computed Getter
	 * 
	 * @public
	 * 
	 * @return {Array}
	 */
	get computed() {
		return this._computed;
	}
	/**
	 * State In Bind Attributes Setter
	 * 
	 * @public
	 * @param {String} html
	 */
	set statesInBindAttributes(html) {
		html.split(/:(?=\w*=)/).forEach((bindAttr, i) => {
			if (i > 0) {
				const withTypeRegExp = /^\w*=("|')(\w*(\s*-\s*\w*)*)("|')/;

				if (withTypeRegExp.test(bindAttr)) {
					const attrib = bindAttr.match(withTypeRegExp)[0];

					if (/state/.test(attrib)) {
						const stateName = attrib.replace(/'/g, "\"").split(/="/)[1].replace(/\s*-.*$/, "");
						this._states.push(stateName);
					}
				}
			}
		});
	}
	/**
	 * States In Bars Setter
	 * 
	 * @public
	 * @param {array} dataArray 
	 */
	set statesInBars(dataArray){
		/* 
			Capture State Without Value and push to Empty Array
		*/
		var _stateArray = []; //Declare Empty Array to State With Declaration: {name - state}
		dataArray.forEach(e => {
			const _matched = e.match(this._regExpToMatchState);
			if (Array.isArray(_matched)) {
				_stateArray.push(_matched[0]);
			}
		});
		/* 
			Capture State With Value and Instance and push to Empty Array
		 */       
		var _stateWithValueArray = []; //Declare Empty Array to State With Value: {name - state - someValue}
		dataArray.forEach(e => {
			const _matched = e.match(this._regExpToMatchStateWithValue); 
			if (Array.isArray(_matched)) {
				_stateWithValueArray.push(_matched[0]);
			}
		});

		/*
		 * If a state is defined on Javascript filter declaration without value 
		 */
		_stateArray = _stateArray.filter(e => {
			var stateIsDefined = false;
			this._states.forEach(state => {
				var stateName = typeof state === "object" ? state.key : state;

				//If Match e with state name
				if (new RegExp(`^${stateName}\\s*-\\s*state`).test(e))
					stateIsDefined = true;
			});

			return !stateIsDefined;
		});

		_stateWithValueArray.forEach(e => {
			this._states.forEach(state => {
				var stateName = typeof state === "object" ? state.key : state;

				//If Match e with state name
				if (new RegExp(`^${stateName}\\s*-\\s*state\\s*-\\s*.*`).test(e))
					new global.StateAlreadyDefinedError(stateName);
			});
		});

		//If State With Declaration, Map and Push to Component States
		if (_stateArray.length > 0){
			_stateArray.forEach(e => {
				const _stateName = e.match(/^\w*/g)[0]; //Get State Name
				this._states.push(_stateName);
			});
		}

		//If State With Value, Map and Push to Component States
		if (_stateWithValueArray) {
			_stateWithValueArray.forEach(e => {
				const _getKey = e.match(/^\w*/);
				const value = this._defineTypeFromString(e.match(/(\w*|\{.*\}|\[.*\]|('|")\w*(\s*\w*)*('|"))$/)[0]); //Set Value
				const key = _getKey[0]; //Set Key
				this._states.push({key, value });
			});
		}
	}
	/**
	 * States Getter
	 * 
	 * @public
	 * @return {Array}
	 */
	get states() {
		return this._states;
	}
	/**
	 * Methods Setter
	 * 
	 * Map and get all HTML events attr like onclick, onsubmit, etc.
	 * 
	 * @public
	 * @param {string} html HTML String
	 */
	set methods(html) {
		const methodRegExp = new RegExp(`on(${events.join("|")})=("|')\\w*\\(.*\\)("|')`, "g"),
			methodWithoutParamsRegExp = new RegExp(`on(${events.join("|")})=("|')\\w*("|')`, "g");

		var haveMethods = methodRegExp.test(html),
			haveMethodsWithoutParams = methodWithoutParamsRegExp.test(html);

		const getDuplicates = () => {
			//Array to push each method if don't is duplicate 
			var duplicateList = ["1234"];

			//Methods Errors Handle
			this._methods = this._methods.filter(method => {
				let duplicate = false;
				duplicateList.forEach(methodNameToCompare => {
					if (method.name === methodNameToCompare)
						duplicate = true;

					else
						duplicateList.push(method.name);
				});
				if (!duplicate) return method;
			});
		};
		if (haveMethods) {
			html.match(methodRegExp).forEach(e => {
				const split = e.split("=");
				const name = split[1].match(/\w*(?=\()/)[0];
				this._methods.push({
					name, /*Get Method Name*/
					content:null
				});
			});
			getDuplicates();
		
		} else if (haveMethodsWithoutParams) {
			html.match(methodWithoutParamsRegExp).forEach(e => {
				const name = e.replace(/\w*\s*=\s*('|")/, "").match(/\w*(?="|')/)[0];
				this._methods.push({
					name, /*Get Method Name*/
					content:null
				});
			});

			getDuplicates();
		}
	}
	/**
	 * Methods Getter
	 * 
	 * @public
	 * @return {Array}
	 */
	get methods() {
		return this._methods;
	}
	/**
	 * Props In Bind Attributes Setter
	 * 
	 * @public
	 * @param {String} html
	 */
	set propsInBindAttributes(html) {
		html.split(/:(?=\w*=)/).forEach((bindAttr, i) => {
			if (i > 0) {
				const regExpToMatch = /^\w*=("|')(\w*(\s*-\s*\w*)*)("|')/;
				if (regExpToMatch.test(bindAttr)) {
					const attrib = bindAttr.match(regExpToMatch)[0];

					if (/prop/.test(attrib)) {
						const propName = attrib.replace(/'/g, "\"").split(/="/)[1].replace(/\s*-.*$/, "");
						this._props.push(propName);
					}
				}
			}
		});
	}
	/**
	* Props In Bars
	* 
	* @public
	* @param {Array} dataArray
	*/
	set propsInBars(dataArray) {
		//Map Array
		dataArray.forEach(e => {
			//If Match Add Prop Name to Props
			if (e.match(this._regExpToMatchProps)) {
				this._props.push(e.replace(/\s-\s\w*/g, ""));
			}
		});
	}
	/**
	 * Props Getter
	 * 
	 * @public
	 * 
	 * @return {Array}
	 */
	get props() {
		return this._props;
	}
	/**
	 * Inputs Setter
	 * 
	 * Get Input, Textarea and Option Tags from HTML String
	 * 
	 * @public
	 * @param {string} html 
	 */
	set inputs(html) {
		//Match Tags
		const inputs = html.match(/<(input|select|textarea).*(\/>|>)/g);
		if (Array.isArray(inputs)) {
			//Map Matches Tags
			inputs.forEach(e => {
				//If the tag have the attr "name" set an input handler
				const name = e.match(/name=('|")\w*('|")/g);
				if (Array.isArray(name)) {
					const stateKey = name[0].match(/('|")\w*(?="|')/)[0].slice(1); //Get the name value to declare a state
					if (!stateKey)
						new global.UndefinedInputNameError(e.split(/\r\n|\n|\r/)[0]);

					this._handleInputs = true;
					this._states.push(stateKey); //push to states
				}
				else {
					if (!global.RocketTranslator.ignoreInputName) new global.ExpectedAttributeError(e.split(/\r\n|\n|\r/)[0], "name");
				}
			});
		}
	}
	/**
	 * Handle Inputs Getter
	 * 
	 * @public
	 * @return {Array}
	 */
	get handleInputs() {
		return this._handleInputs;
	}
	/**
	 * Conditionals Validator
	 * 
	 * @description Validate that conditions are a state or prop
	 *
	 * @public
	 * @param {String} html
	 */
	conditionalsValidator(html){
		//Function to get tag condition
		const getCond = data => {
			const tagRegExp = /\s*tag=('|")\w*(-\w*)*("|')/;

			data = data.replace(tagRegExp, "");

			const dataCond = data.match(/cond=('|").*('|")/g);

			return dataCond[0].replace(/cond=('|")/, "").replace(/('|")$/, "");
		};
		const condTagsArray = html.split(/<if |<else-if /);
		condTagsArray
			.forEach((e, i) => {
				if (i > 0) {
					const cond = getCond(e);

					const condDefined = cond.match(/^\w*/)[0];
					const matchState = this.isState(condDefined);

					if (!matchState) new global.UndefinedStateError({type:"conditional", name:condDefined, condition: cond});
				}
			});
	}
	/**
	 * Conditionals Getter
	 * 
	 * @public
	 * 
	 * @return {Array}
	 */
	get conditionals() {
		return this._conditionals;
	}
	/**
	 * Loops Validator
	 * 
	 * @description Validate that loop are a state or prop
	 *
	 * @public
	 * @param {String} html
	 */
	loopsValidator(html){
		const loopsTagsArray = html.split(/<for /);

		loopsTagsArray
			.forEach((e, i) => {
				if (i > 0) {
					const valueAndState = e.match(/val=('|").*(?=('|")>)/)[0];
					const stateToMap = valueAndState.replace(/^.*in /, "").replace(/('|").*/, "");
					
					const matchState = this.isState(stateToMap);

					if (!matchState) new global.UndefinedStateError({type:"loop", name:stateToMap});
				}
			});
	}
	/**
	 * Loops Getter
	 * 
	 * @public
	 * 
	 * @return {Array}
	 */
	get loops() {
		return this._loops;
	}

	//------------------------------------------------------------------------------
	/*Internal Methods*/
	
	/**
	 * JSON Prettify
	 * 
	 * Convert an Object to String and add new lines and indents to code beauty
	 * 
	 * @protected
	 * @param {Object} json
	 * 
	 * @return {String}
	 */
	_JSONPrettify(json){
		Object.entries(json).forEach(e => {
			const name = e[0];
			const value = e[1];
			if (value === undefined)
				json[name] = null;
		})
		var jsonToString = JSON.stringify(json); //Convert to String
		const quoteMatch = jsonToString.match(/"\w*"(?=:)/g); //Get Object keys
		quoteMatch.forEach(e => {
			//Add indents and delete quotes in state keys
			jsonToString = jsonToString.replace(e, `${e.slice(1, e.length-1)}`);
		});
		//Filter Globals
		this._globals.forEach(glob => {
			jsonToString = jsonToString.replace(new RegExp(`('|")${glob}('|")`), glob);
		});

		return jsonToString.replace(/\{/g, "{\n")
			.replace(/,(?=(\t)*\w*:)/g, ",\n")
			.replace(/}/g, "\n}");
	}
	/**
	 * Set Data From HTML
	 * 
	 * Get All Data From HTML
	 * 
	 * @private
	 * @param {string} html
	 */
	_setDataFromHTML(html){
		this.components = html; //Get Components
		html = html
			.split("<component ")
			.map((e, i) => {
				if (i > 0) {
					const name = e.match(/name=('|")\w*/)[0].slice(6);
					const splitted = e.split("</component>");
					const tag = splitted[0].split(/\r\n|\n|\r/)[0];
					return tag.replace(/name=('|")\w*('|")/, name).replace(">", "/>") + splitted[1];
				}
				return e;
			})
			.join("<");
		/*
		 *	Get all data that was be declared with "{Name - Type}" format.
		 */
		const _getBarsSyntax = html
			.split("{")
			.map((e, i) => {
				if (i > 0) {
					const match = e.match(/.*(?=\})/g); //Get All that continue with "}" 
					if(Array.isArray(match))
						return match[0];

					new global.ExpectedTokenError(e);
				}
			}).filter(a => a);
			//Handle Error
		_getBarsSyntax.forEach(e => {
			if (/^\w*$/.test(e))
				return;

			if (!/\w*\s*-\s*(state|prop|computed)/.test(e))
				new global.UndefinedTypeError(e);
		});

		if (_getBarsSyntax) {
			this.statesInBars = _getBarsSyntax; //Get States
			this.computed = _getBarsSyntax; //Get Computed Methods 
			this.propsInBars = _getBarsSyntax; //Get Props
		}
		this.statesInBindAttributes = html;

		this.propsInBindAttributes = html;

		this.inputs = html; //Get Inputs, Textarea and Options

		this.conditionalsValidator(html); //Get conditionals Data

		this.loopsValidator(html); //Get Loops Data

		this.methods = html; //Call Method to Get Data from HTML String
	}
	/**
	 * Filter Javascript
	 *
	 * Get an Object's Array with JS Data and return with Vue or React Syntax
	 *
	 * @protected
	 * @param {Array} JsArray
	 * 
	 * @return {Array}
	 */
	_filterJS(JsArray){
		//Watch if have Content
		if (JsArray.length > 0) {
			//Map JS Content
			const JsonArray = JsArray.map(({content, name}) => {
				if (/^async/.test(content))
					name = `async ${name}`;

				const params = content.match(/\(.*\)|(\w*(?=\s*=>))/)[0];
				content = content.replace(/.*(?={)/, "");

				var data = content; //Asign content to var data
				/*
					Map exist state to asign the state declaration to data

					Example: If var 'name' is a state 
					On React was be: 'this.state.name' 
					and on Vue was be: 'this.name'
				*/
				data = this._expressionsFilter(content);

				if (global.RocketTranslator.mode === "react")
					data = this._setStateFilter(data);

				data = data.replace(/\.RocketStates\.|\.RocketProps\./g, ".");

				return {
					name,
					content:params + data
						.split("\n")
						.map((es, i) => {
							if (es && i > 0 && es != /^}(\s|\t)*$/) return `${es}\n`;
							else return `${es}\n`;
						})
						.join("")
						.replace(/(\n|\r)$/g, "")
				};
			});
			return JsonArray;
		}
	}
	/**
	 * Set State Filter
	 * 
	 * Filter the state value assignament and change: 'this.state.name = "Value";'
	 * with: 'this.setState({name: "Value"});'
	 * 
	 * Executes only when translate React
	 * 
	 * @private
	 * @param {String} data 
	 * 
	 * @return {String}
	 */
	_setStateFilter(data) {
		const statesToChange = data.match(/this\.state\.\w*\s*=.*/g);

		if(statesToChange === null)
			return data;

		statesToChange.forEach(states => {
			const value = states.match(/=.*$/)[0].replace(/=\s*/, "").replace(/;/, "");
			const state = states.replace(/this\.state\./, "").replace(/\s*=.*/, "");

			const setStateString = `this.setState({${state}: ${value}});`;
			data = data.replace(states, setStateString);
		});

		return data;
	}
	/**
	 * Parse JS
	 *
	 * Parse Javascript with Babylon parser
	 *
	 * @param {String} code
	 *
	 * return {Object}
	 */
	_parseJS(code) {
		const {tokens} = parse(code);
		const parsed = tokens.map(({type: tokenType, start, value}, i) => {
			const matchVar = new RegExp(`(var|let|const)\\s*${value}`).exec(code);
			const matchFuntion = new RegExp(`${value}\\s*\\(.*\\)`).exec(code);
			const matchParam = new RegExp(`\\(\\s*(\\w*\\s*,\\s*)*${value}(\\w*\\s*,\\s*)*\\)\\s*{|\\(\\s*(\\w*\\s*,\\s*)*${value}(\\w*\\s*,\\s*)*\\)\\s*=>\\s*{|\\s*${value}\\s*=>`).exec(code);
			const objectParam = new RegExp(`^${value}\\s*:`).exec(code.slice(start));

			var type = tokenType.label;
			if (matchVar !== null)
				type = matchVar[1];

			else if (matchFuntion !== null)
				type = "function";

			else if (matchParam !== null || objectParam !== null)
				type = "param";

			if (value === "States") {
				// eslint-disable-next-line prefer-destructuring
				value = tokens[i+2].value;
				type = "state";
				delete tokens[i+2];
			}
			else if (value == "Props") {
				// eslint-disable-next-line prefer-destructuring
				value = tokens[i+2].value;
				type = "prop";
				delete tokens[i+2];
			}

			return {
				type,
				position: start,
				value
			};
		});

		const vars = parsed.filter(({type}) => /var|let|const|param/.test(type));
		const data = parsed.filter(({type}) => /function|name|state|prop/.test(type));

		return {
			vars,
			data
		};
	}

	/**
	 * Expressions Filter
	 * 
	 * Filter States and Props vars with corresponding caller
	 * 
	 * @private
	 * @param {String} code
	 * 
	 * @return {String}
	 */
	_expressionsFilter(code) {
		//Filter States
		var filtered = code;

		const {data} = this._parseJS(code);
		const isReact = global.RocketTranslator.mode === "react";
		const stateReplacemment = isReact ? "this.state." : "this.";
		const propReplacemment = isReact ? "this.props." : "this.";

		data.reverse().forEach(({value, position}) => {
			var isState = false;
			const isMethod = this.isMethod(value);
			const isProp = this.isProp(value);
			var isStateInObject = false;

			const init = filtered.slice(0, position);
			const rest = filtered.slice(position);

			for (let i = 0; i <= this._states.length; i++) {
				const state = this._states[i];
				const name = typeof state === "object" ? state.key : state;
				if (value === name) {
					isState = true;
					isStateInObject = new RegExp(`\\n(\\t*|(\\s\\s)*)${state}\\s*,|(\\{\\s*|,\\s*)${state}\\s*(,|\\})`).test(filtered);
					break;
				}
			}

			if (isStateInObject) {
				filtered = `${init}${value}: ${stateReplacemment}${rest}`;
				return;
			}
			if (isState) {
				filtered = `${init}${stateReplacemment}${rest}`;
				return;
			}
			if (isProp) {
				filtered = `${init}${propReplacemment}${rest}`;
				return;
			}

			if (isMethod) {
				filtered = `${init}this.${rest}`;
				return;
			}
		});

		return filtered;
	}
	/**
	 * Globals Getter
	 * 
	 * Getter that return the global list
	 * 
	 * @private
	 * @return {Array}
	 */
	get _globals () {
		if (!global.RocketGlobal)
			return globalList;
		
		const {defineGlobals} = new Function(`return {${global.RocketGlobals}}`)();

		return globalList.concat(defineGlobals());
	}
	/**
	 * Define Type From String
	 * 
	 * Get String Value and Parse that
	 * 
	 * @param {string} string String Value
	 * 
	 * @return {any}
	 */
	_defineTypeFromString(string){
		const _isString = /^("|').*('|")$/.test(string);
		const _isDigit = /^\d*$/.test(string);
		const _isBoolean = /(true|false)$/g.test(string);
		const _isArray = /^\[.*\]$/.test(string);
		const _isObject = /^\{(\r|\n)*((\t*).*(\r|\n*))*\}/g.test(string);
		const _isNull = /null$/g.test(string);
		const _isUndefined = /undefined$/g.test(string);
		const _isNaN = /NaN$/g.test(string);
		const _isInfinity = /Infinity$/g.test(string);

		if (_isDigit)
			return parseFloat(string);

		if (_isNull)
			return null;

		if (_isNaN)
			return NaN;

		if (_isInfinity)
			return Infinity;

		if (_isUndefined)
			return undefined;

		if (_isBoolean)
			return this._BooleanParser(string);
		
		if(_isArray)
			return this._ArrayAndObjectParser(_isArray[0]);
		
		if (_isObject)
			return this._ArrayAndObjectParser(_isObject[0]);
		
		if(_isString)
			return string.replace(/("|')/g, ""); //String Value
		
		/*is Var*/
		return {var:string};
	}
	/**
	 * Boolean Parser
	 * 
	 * Parse Boolean String
	 * 
	 * @param {string} string String Value
	 * 
	 * @return {Boolean}
	 */
	_BooleanParser(string){
		if (string === "true")
			return true;
		
		return false;
	}
	/**
	 * Array And Object Parser
	 * 
	 * Parse Array, Object and Define Type
	 * 
	 * @param {string} string String Value
	 * 
	 * @return {Array}
	 */
	_ArrayAndObjectParser(string){
		return JSON.parse(string);
	}
	//------------------JSX Methods--------------------//
	/**
	 * Parse HTML
	 *
	 * @description Parse HTML and generate a JSX Linear AST
	 * @private
	 * @param {String} code
	 *
	 * @return {Array}
	 */
	_parseHTML(code) {
		//TO DO implement Splitter /<(?=\w*(?!.*>.*(?!{).*})|\/\w*(?!.*>.*(?!{).*}))/
	
		return code.split(/</).filter(e => e).map((line) => {
	
			const tag = line.match(/\/*\w*(-\w*)*/)[0].replace("/", "");
			var content = line.match(/>.*/)[0].replace(">", "");
			var attr = line.match(/.*>/)[0].replace(/>/, "");
	
			attr = attr.split(/\s(?=:*\w*=('|"))/)
				.filter(e => /\w*=("|')/.test(e))
				.map(e => {
					const isBind = e[0] === ":";
	
					if (isBind) e = e.slice(1);
				
					const splitted = e.split("=");
					const name = splitted[0];
	
					splitted.shift();
	
					const value = splitted.join("=").replace(/^("|')|('|").*$/g, "");
	
					return {
						name,
						value,
						isBind
					};
				});
			var mode;
			var type;
			//Parse Content
			if (/\w*(\s*-\s*\w*)*/.test(content)) {
				const matches = content.match(/{\w*(\s*-\s*.*)*}/g);
				if (Array.isArray(matches)) {

					matches.forEach(e => {
						const name = e.match(/^\{\w*/)[0].slice(1);
						const matchType = e.match(/\s*-\s*\w*/);
						const type = Array.isArray(matchType) ? matchType[0].replace(/\s*-\s*/, "") : null;
						if (global.RocketTranslator.mode === "react") {
							if (type === "prop")
								content = content.replace(e, `{this.props.${name}}`);
							
							else if (type === "state")
								content = content.replace(e, `{this.state.${name}}`);

							else if (type === "computed")
								content = content.replace(e, `{${name}}`);
						}
						else {
							if (type !== null)
								content = content.replace(e, `{this.${name}}`);
						}
					});
				}
			}
		
			if (tag[0].toUpperCase() === tag[0]) 
				type = "component";
	
			else if (tag === "if" || tag === "else" || tag === "else-if")
				type = "conditional";
	
			else if (tag === "for")
				type = "loop";
	
			else
				type = "normal";
		
			if (/^\/\w*(-\w*)*>/.test(line))
				mode = "close";
	
			else if (/\w*.*\/>/.test(line))
				mode = "single";
	
			else if (/^\w*/.test(line))
				mode = "open";
	
			return {
				tag,
				mode,
				type,
				content,
				attr
			};
		});
	}
	/**
	 * Generate JSX
	 *
	 * @description Generate JSX tags from linear AST
	 * @private
	 * @param {Array} parsedCode
	 *
	 * @return {Array}
	 */
	_generateJSXAst(parsedCode) {
		var parts = [];
		var tree = [];
		var condID = -1;
		const parseAttributes = attr => {
			const parseMathOps = (operator, value) => {
				const name = value.split(/\s*(-|\*|\/|\+)\s*/)[0];

				return `{() => this.setState({${name}: this.state.${value}})}`;
			};
			return attr.map(({name, value, isBind}) => {

				if (name.startsWith("on")) {
					const valueName = value.replace(/\+|-|\*|\/|State\.|Props\./g, "").match(/\w*/)[0];
					name = `on${  this._generateJSXEventName(name.slice(2))}`;

					if (/\w*\+\+/.test(value) || /\+\+\w*/.test(value)) { //Increment
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						const stateName =  value.replace("++", "");
						value = `{() => this.setState({${stateName}: this.state.${stateName} + 1})}`;
					}
					else if (/\w*--/.test(value) || /--\w*/.test(value)) { //Decrement
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						const stateName =  value.replace("--", "");
						value = `{() => this.setState({${stateName}: this.state.${stateName} - 1})}`;
					}
					else if (/\w*\s*\+\s*\d*/.test(value)) {//Math Operation: Add
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						value = parseMathOps("+", value);
					}

					else if (/\w*\s*-\s*\d*/.test(value)) {//Math Operation: Sust
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						value = parseMathOps("-", value);
					}

					else if (/\w*\s*\*\s*\d*/.test(value)) {//Math Operation: Mult
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						value = parseMathOps("*", value);
					}

					else if (/\w*\s*\/\s*\d*/.test(value)) {//Math Operation: Div
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						value = parseMathOps("/", value);
					}

					else if (/\w*\s*=\s*.*/.test(value)) {//Assing Value
						if (!this.isState(valueName) && !this.isProp(valueName))
							new global.UndefinedStateError({type: "function", name: valueName, content: value});
							
						value = `{() => this.setState({${value.replace(/\s*=\s*.*/, "")}: this.state.${value.replace(/\w*\s*=\s*/, "")}})}`;
					}

					else {
						if (!this.isMethod(valueName))
							new global.UndefinedMethodError(valueName);
							
						value = `${(value.endsWith(")") ? "{() => this." : "{this.") + value  }}`;
					}
				} else {
					if (isBind) {
						if (this.isState(value) || /RocketStates\.\w*/.test(value))
							value = `{this.state.${value.replace("RocketStates.", "")}}`;
						else if (this.isProp(value) || /RocketProps\.\w*/.test(value))
							value = `{this.props.${value.replace("RocketProps.", "")}}`;
						else
							value = `{${value}}`;
					}
					else
						value = `"${value}"`;
				}
				return `${name}=${value}`;

			}).join(" ");
		};
		parsedCode.forEach(({type, mode, tag, content, attr}, i) => {
			const isOpen = mode === "open";
			if (i === 0) {
				parts.push({tag, tree: Object.assign([], tree).join(","), content: `\n<${tag}>@content@${this.styles}\n</${tag}>`, type: "root"});
				tree.push(tag);
			} else {
				if (isOpen) {
					if (type === "loop") {
						var state;
						var toMap;
						attr.forEach(({name, value}) => {
							if (name === "val") {
								state = value.match(/in\s*\w*/)[0].replace(/in\s*/, "");

								this.states.forEach(k => {
									const stateName = typeof k === "object" ? k.key : k;
									var mode = global.RocketTranslator.mode === "react" ? "this.state." : "this.";
									if (state === stateName) {
										state = state.replace(stateName, `${mode}${stateName}`);
									}
								});
								this.props.forEach(prop => {
									var mode = global.RocketTranslator.mode === "react" ? "this.props." : "this.";
									if (state === prop) {
										state = state.replace(prop, `${mode}${prop}`);
									}
								});

								toMap = value.match(/.*(?=\s*in)/)[0];
							}
						});
						parts.push({tag, tree: Object.assign([], tree).join(","), content:`const loop${i} = ${state}.map(${toMap} => (@content@));\n`, type:"loop"});
					}
					else if (type === "conditional") {
						var condition;
						var newTag = tag.replace("-", " ");
	
						condID++;
	
						if (tag !== "else") {
							attr.forEach(({name, value}) => {
								if (name === "cond") {
									this.states.forEach(state => {
										const stateName = typeof state === "object" ? state.key : state;
										var mode = global.RocketTranslator.mode === "react" ? "this.state." : "this.";

										value = value.replace(stateName, `${mode}${stateName}`);
									});
									this.props.forEach(prop => {
										var mode = global.RocketTranslator.mode === "react" ? "this.props." : "this.";

										value = value.replace(prop, `${mode}${prop}`);
									});

									condition = ` (${value})`;
								}
							});
						}
						else
							condition = "";
	
						parts.push({tag, tree: Object.assign([], tree).join(","), content:`${newTag}${condition} { conditional${condID} = @content@}`, type:"conditional"});
					}
					else {
						if (tag === "a" && global.RocketTranslator.allowSSR) {
							var href;
							for (let i = 0; i < attr.length; i++) {
								const {name} = attr[i];

								if (name === "href") {
									href = parseAttributes([attr[i]]);
									delete attr[i];
									break;
								}
							}

							parts.push({tag: "Link", tree: Object.assign([], tree).join(","), type: "content", content: `\n<Link${href ? ` ${href}` : ""} prefetch>@content@\n</Link>@content@`});
							tree.push("Link");

							var existsLink = false;
							for (let i = 0; i < this._components.length; i++) {
								const {name, path} = this._components[i];
								if (name === "Link" && path === "next/link") {
									existsLink = true;
									break;
								}
							}
							if (!existsLink)
								this._components.push({name: "Link", type: "external", path: "next/link"})
						}
						const attributes = parseAttributes(attr);
						parts.push({tag, tree: Object.assign([], tree).join(","), type: "content", content: `\n<${tag}${attributes ? ` ${attributes}` : ""}>${content ? content : "@content@\n"}</${tag}>`});
					}
					tree.push(tag);
				}
				else if (mode === "single") {
					const attributes = parseAttributes(attr);

					parts.push({tag, tree: Object.assign([], tree).join(","), type, content: `\n<${tag}${attributes ? ` ${attributes}` : ""}/>`});
				}
				else {
	
					const next = parsedCode[i+1];
	
					if (next) {
						if (mode === "close" && (next.type === "conditional" && next.mode === "close")) {
							condID--;
						}
					}
	
					tree.pop();
					parts.push({tag, type: "close", content:"", tree: Object.assign([], tree).join(",")});
					if (tag === "a" && global.RocketTranslator.allowSSR) {
						tree.pop();
						parts.push({tag: "Link", type: "close", content:"", tree: Object.assign([], tree).join(",")});
					}
				}
			}
		});
		return parts;
	}
	/**
	 * Generate JSX Event Name
	 *
	 * @description Take HTML event name and return in JSX
	 * @private
	 * @param {String} name
	 *
	 * @return {String}
	 */
	_generateJSXEventName(name) {
		var splitted;
		switch (name) {
		//3
		case "dblclick":
		case "canplay":
		case "popstate":
		case "keydown":
		case "keypress":
		case "keyup":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[2] = splitted[2].toUpperCase();
			return splitted.join("");

		//4
		case "hashchange":
		case "loadstart":
		case "dragend":
		case "dragenter":
		case "dragleave":
		case "dragover":
		case "dragstart":
		case "pagehide":
		case "pageshow":
		case "ratechange":
		case "timeupdate":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[3] = splitted[3].toUpperCase();
			return splitted.join("");

		//5
		case "afterprint":
		case "focusin":
		case "focusout":
		case "mousedown":
		case "mouseenter":
		case "mouseleave":
		case "mousemove":
		case "mouseover":
		case "mouseout":
		case "mouseup":
		case "touchcancel":
		case "touchend":
		case "touchmove":
		case "touchstart":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[4] = splitted[4].toUpperCase();
			return splitted.join("");

		//6
		case "volumechange":
		case "beforeprint":
		case "beforeunload":
		case "loadeddata":
		case "loadedmetadata":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[5] = splitted[5].toUpperCase();
			return splitted.join("");


		//7
		case "contextmenu":
		case "pointerdown":
		case "pointermove":
		case "pointerup":
		case "pointercancel":
		case "pointerenter":
		case "pointerleave":
		case "pointerover":
		case "pointerout":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[6] = splitted[6].toUpperCase();
			return splitted.join("");

		//8
		case "durationchange":
			return "DurationChange";

		//9
		case "animationend":
		case "animationiteration":
		case "animationstart":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[8] = splitted[8].toUpperCase();
			return splitted.join("");

		//11
		case "compositionend": 
		case "compositionstart":
		case "compositionupdate":
			splitted = name.split("");
			splitted[0] = splitted[0].toUpperCase();
			splitted[10] = splitted[10].toUpperCase();
			return splitted.join("");

		case "canplaythrough":
			return "CanPlayThrough";
		
		case "gotpointercapture":
			return "GotPointerCapture";
		
		case "lostpointercapture":
			return "LostPointerCapture";
		
		case "transitionend":
			return "TransitionEnd";
		
		default:
			return name[0].toUpperCase() + name.slice(1);
		}
	}
	/**
	 * JSX Generator
	 *
	 * @description Take linear AST and generate final JSX Tree
	 * @private
	 * @param {Array} JSXArray
	 *
	 * @return {Object<HTML: String, conditionals: Array, loops: Array>}
	 */
	_JSXGenerator(JSXArray) {
		//Define empty data for set Components
		var main;
		JSXArray.forEach(({tree, content, type, tag}, i) => {

			if (i === 0)
				main = content;

			if (type === "loop") {
				this._loops.push(this._generateJSXLoops(JSXArray, i, {tree, content, type, tag}));
			} else if (type === "conditional") {
				this._conditionals.push(this._generateJSXConditional(JSXArray, i, {tree, content, type, tag}, this._conditionals));
			} else {
				const init = JSXArray[i+1];

				var part = "";
				if (init) {
					if (init.type === "loop") {
						part = `{${init.content.match(/const\s*\w*/)[0].replace(/const\s*/, "")}}`;
					}
					else if (init.type === "conditional") {
						if (init.tag === "if")
							part = `\n{${init.content.match(/\w*(?=\s*= @)/)[0]}}`;
						
						else
							part = "";
					}
					else {
						if (init.content)
							part = init.content;
					}
				} else {
					var altInit = JSXArray[i];
					part = altInit.content;
				}
				if (part) {
					if (!/@content@/.test(part) && !/<a>/.test(part))
						part = `${part}@content@`;

					main = main.replace("@content@", part);
				}
			}
		});
		return {
			loops: this.loops.filter(e => e),
			conditionals: this.conditionals.filter(e => e),
			html: main.replace("@content@", "")
		};
	}
	/**
	 * Generate JSX Loops
	 *
	 * @description Generate loop to JSX Generator
	 * @private
	 *
	 * @param {Array} JSXArray
	 * @param {Int} LoopIndex
	 * @param {Object} LoopData
	 *
	 * @return {String}
	 */
	_generateJSXLoops(JSXArray, LoopIndex, LoopData) {
		const init = JSXArray.slice(LoopIndex);
		const {tree} = LoopData;
		var loop;

		if (init) {
			for (let i = 0; i < init.length; i++) {
				const {tree:newTree, tag:newTag, type:newType} = init[i];
				if (tree === newTree && newType === "close" && newTag === "for") {
					loop = this._JSXGenerator(init.slice(0, i - 1)).html;
					break;
				}
			}
		}

		const countInit = LoopIndex + 1;
		var countEnd;

		for (let i = 0; i < init.length; i++) {
			const newData = init[i];
			const {tree:newTree, tag:newTag, type:newType} = newData;
			if (tree === newTree && newType === "close" && newTag === "for") {
				countEnd = i - 1;
				break;
			}
		}
		JSXArray.splice(countInit, countEnd - 1);

		return loop;
	}
	/**
	 * Generate JSX Conditional
	 *
	 * @description Generate conditional to JSX Generator
	 * @private
	 *
	 * @param {Array} JSXArray
	 * @param {Int} CondIndex
	 * @param {Object} CondData
	 * @param {Array} conditional Ref to main conditional array
	 */
	_generateJSXConditional(JSXArray, CondIndex, CondData, conditionals) {
		const init = JSXArray.slice(CondIndex + 1);
		const {tree, content, tag} = CondData;

		var cond;

		const actualCond = JSXArray[CondIndex];
		if (actualCond.tag === "if" && actualCond.type === "conditional") {
			const varName = actualCond.content.match(/\w*(?=\s*=\s*@)/)[0];
			conditionals.push(`var ${varName};`);
		}

		if (init) {
			for (let a = 0; a < init.length; a++) {
				const {tree:newTree, tag:newTag, type:newType} = init[a];
				if (tree === newTree && newType === "close" && newTag === tag) {
					cond = `${this._JSXGenerator(init.slice(0, a)).html} `;
					if (cond.startsWith("if") || cond.startsWith("else"))
						cond = cond.match(/{\s\w*\s/)[0].slice(1);
					
					else if (/loop/.test(cond))
						cond = cond.match(/^const \w*\s/)[0].replace("const ", "");
					
					break;
				}
			}
			conditionals.push(content.replace("@content@", cond));
		}

		var countInit = CondIndex + 1;
		var countEnd;
		for (let a = 0; a < init.length; a++) {
			const newData = init[a];
			const {tree:newTree, tag:newTag, type:newType} = newData;
			if (tree === newTree && newType === "close" && newTag === tag) {
				countEnd = a;
				break;
			}
		}
		JSXArray.splice(countInit, countEnd);
	}
	/**
	 * Generate JSX
	 *
	 * @description JSX Generator Interface
	 * @protected
	 * @param {String} HTML
	 *
	 * return {Object}
	 */
	_generateJSX(HTML) {
		return this._JSXGenerator(this._generateJSXAst(this._parseHTML(HTML)));
	}
	/**
	 * Is State
	 * 
	 * @description Get a "name" and return if exist in states Array
	 *
	 * @public
	 * @param {String} name
	 *
	 * @return {Boolean}
	 */
	isState(name) {
		var isState = false;
		for (let i = 0; i < this._states.length; i++) {
			const state = this._states[i];
			const stateName = typeof state === "object" ? state.key : state;
			if (name === stateName) {
				isState = true;
				break;
			}
		}

		return isState;
	}
	/**
	 * Is Prop
	 * 
	 * @description Get a "name" and return if exist in Props Array
	 *
	 * @public
	 * @param {String} name
	 *
	 * @return {Boolean}
	 */
	isProp(name) {
		var isProp = false;
		for (let i = 0; i < this._props.length; i++) {
			const prop = this._props[i];
			if (name === prop) {
				isProp = true;
				break;
			}
		}

		return isProp;
	}
	/**
	 * Is Method
	 * 
	 * @description Get a "name" and return if exist in Methods Array
	 *
	 * @public
	 * @param {String} name
	 *
	 * @return {Boolean}
	 */
	isMethod(name) {
		var isMethod = false;
		for (let i = 0; i < this._methods.length; i++) {
			const methodName = this._methods[i].name;
			if (name === methodName.match(/\w*$/)[0]) {
				isMethod = true;
				break;
			}
		}

		return isMethod;
	}
	/**
	 * Is Computed
	 * 
	 * @description Get a "name" and return if exist in Computeds Array
	 *
	 * @public
	 * @param {String} name
	 *
	 * @return {Boolean}
	 */
	isComputed(name) {
		var isComputed = false;
		for (let i = 0; i < this._computed.length; i++) {
			const computedName = this._computed[i].name;
			if (name === computedName) {
				isComputed = true;
				break;
			}
		}

		return isComputed;
	}
	/**
	 * Is Watcher
	 * 
	 * @description Get a "name" and return if exist in Watcher Array
	 *
	 * @public
	 * @param {String} name
	 *
	 * @return {Boolean}
	 */
	isWatcher(name) {
		var isWatcher = false;
		for (let i = 0; i < this._watchers.length; i++) {
			const watcherName = this._watchers[i].name;
			if (name === watcherName) {
				isWatcher = true;
				break;
			}
		}

		return isWatcher;
	}
}

module.exports = StateManagement;
