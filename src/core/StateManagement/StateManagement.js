import defineErrors from "Core/ErrorManagement"; //Define Error Management Globals
import globalList from "Const/Globals";
import {parse} from "babylon";

defineErrors(); 

/**
 * State Management Base Class
 * 
 * Class that manage HTML String and get all data from these
 * 
 * @class
 */
class StateManagement {
	constructor(){
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
	}

	//--------------- Public Methods -----------------

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
	 * @param {String} type This Can Be 'v' or 'r'
	 */
	getJsData(JSParsed, type) {
		if (JSParsed.length > 0) {
			this._filterJS(JSParsed, type).forEach(e => {
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
				let count = 0;
				this.states.forEach(state => {
					let key = typeof state === "object" ? state.key : state;
					if (key === name) count++;
				});
				if (count === 0){
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
	setLifecycle(lifecycles, type) {
		if (lifecycles.length > 0) {
			const jsFiltered = this._filterJS(lifecycles, type);

			this._lifecycle = jsFiltered.map(({name, content}) => {
	
				if (type === "r") {
					switch(name) {
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
					case "beforeUnmount":
					case "unmounted":
						name = "componentWillUnmount";
						break;
					default: break;
					}
				} else if (type === "v") {
					switch(name) {
					case "beforeUnmount":
						name = "beforeDestroy";
						break;
					case "unmounted":
						name = "destroyed";
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
		let _matchComponents = html.match(/<([A-Z]\w*).*\/>/g); //Match Components
		if (_matchComponents) {
			_matchComponents.forEach(e => {
				let name = e.match(/[A-Z]\w*/g)[0]; //Get Component Name
				let bindData = e.match(/:\w*=('|")\w*('|")/g); //Get Bind Prop Data
				let bindDataHasNameAndValue = e.match(/:\w*=('|")\w*\s-\s('|")\w*('|")('|")/g); //Get Bind Prop Data and Value
				if (bindData) {
					this._states.push(bindData[0].replace(/'|"/g, "").slice(1).split("=")[1]); //Push Bind Data to States
				}
				if(bindDataHasNameAndValue){
					let dataArray = bindDataHasNameAndValue[0].split("="); //Get Data Array
					let keyValue = dataArray[1].split(" - "); //Split Key And Value
					let key = keyValue[0].slice(1); //Set Key Name
					let value = this._defineTypeFromString(keyValue[1].slice(0, keyValue[1].length - 1)); //Get Type of Value and Set it
					this._states.push({key, value}); //Push Bind Data With Value to States
				}
				this._components.push(name);
			});
		}

		let splitComponentWithContent = html.split("<component ");
		splitComponentWithContent.forEach((e, i) => {
			if (i > 0) {
				let componentName = e.match(/component-name\s*=\s*('|")\w*/)[0].replace(/component-name\s*=\s*("|')/, "");
				let componentContent = e.replace(/.*>(\r\n|\n|\r)/, "").split(/(\r\n|\n|\r)*\t*<\/component>/)[0];

				this._components.push(componentName);
				
				this.componentsContent.push({
					name:componentName,
					content:componentContent
				});
			}
		});
		this.componentsContent.forEach(({name}) => {
			let duplicates = 0;
			this.componentsContent.forEach(ev => {
				if (name === ev.name) duplicates++;
			});
			if (duplicates > 1) {
				new global.DuplicateComponentError(name);
			}
			
		});
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
		let _computedArray=[]; //Declare Empty Array
		//Map Array to get computed methods
		dataArray.forEach(e => {
			let _computedMatched = e.match(this._regExpToMatchComputed);
			//If Match push to empty array
			if (_computedMatched) {
				//This must match something like: {Name - computed}
				_computedArray.push(_computedMatched[0]);
			}
		});

		//If have matched computed push to Component Computed
		if (_computedArray.length > 0) {
			let computedList = ["1234"];

			_computedArray = _computedArray.filter(e => {
				let duplicate = false;
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
				const withTypeRegExp = /^\w*=("|')\w*\s*-\s*\w*("|')/;

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
		let _stateArray = []; //Declare Empty Array to State With Declaration: {name - state}
		dataArray.forEach(e => {
			let _matched = e.match(this._regExpToMatchState);
			if(_matched){
				_stateArray.push(_matched[0]);
			}
		});
		/* 
			Capture State With Value and Instance and push to Empty Array
		 */       
		let _stateWithValueArray = []; //Declare Empty Array to State With Value: {name - state - someValue}
		dataArray.forEach(e => {
			let _matched = e.match(this._regExpToMatchStateWithValue); 
			if (_matched) {
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
				let _stateName = e.match(/^\w*/g)[0]; //Get State Name
				this._states.push(_stateName);
			});
		}

		//If State With Value, Map and Push to Component States
		if (_stateWithValueArray) {
			_stateWithValueArray.forEach(e => {
				let _getKey = e.match(/^\w*/);
				let value = this._defineTypeFromString(e.match(/(\w*|\{.*\}|\[.*\]|('|")\w*(\s*\w*)*('|"))$/)[0]); //Set Value
				let key = _getKey[0]; //Set Key
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
		const	methodRegExp = /on\w*=("|')\w*\(.*\)("|')/g,
			assignRegExp = /on\w*=("|')\w*\s*=\s*(?=('|")\w*|\d*|\{|\[)/g,
			incrementRegExp = /on\w*=("|')\w*\s*\+/g,
			multRegExp = /on\w*=("|')\w*\s*\*/g,
			divRegExp = /on\w*=("|')\w*\s*\//g,
			decrementRegExp = /on\w*=("|')\w*\s*-/g;

		var haveMethods = methodRegExp.test(html),
			haveAssign = assignRegExp.test(html),
			haveIncrement = incrementRegExp.test(html),
			haveMult = multRegExp.test(html),
			haveDiv = divRegExp.test(html),
			haveDecrement = decrementRegExp.test(html);

		if (haveMethods) {
			html.match(methodRegExp).forEach(e => {
				let split = e.split("=");
				let name = split[1].match(/\w*(?=\()/)[0];
				this._methods.push({
					name, /*Get Method Name*/
					content:null
				});
			});

			//Array to push each method if don't is duplicate 
			let duplicateList = ["1234"];

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
		} else if (haveAssign) {
			html.match(assignRegExp).forEach(e => {
				const expression = html.match(new RegExp(`${e}.*('|")`))[0];
				var haveState = false;
				
				const name = expression.match(/=('|")\w*/)[0].replace(/=('|")/, "");

				for(let i = 0; i < this._states.length; i++) {
					const stateName = typeof this._states[i] === "object" ? this._states[i].key : this._states[i];
					
					haveState = new RegExp(`=("|')${stateName}`).test(expression);

					if (haveState)
						break;
				}
				
				if (!haveState)
					new global.UndefinedStateError({name, type: expression});
			});
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
		let inputs = html.match(/<(input|select|textarea).*(\/>|>)/g);
		if (inputs) {
			//Map Matches Tags
			inputs.forEach(e => {
				//If the tag have the attr "name" set an input handler
				let name = e.match(/name=('|")\w*('|")/g);
				if (name) {
					let stateKey = name[0].match(/('|")\w*(?="|')/)[0].slice(1); //Get the name value to declare a state
					if (!stateKey)
						new global.UndefinedInputNameError(e.split(/\r\n|\n|\r/)[0]);
					this._handleInputs = true;
					this._states.push(stateKey); //push to states
				}
				else {
					if (!global.RocketTranslator.ignoreInputName)
						new global.ExpectedAttributeError(e.split(/\r\n|\n|\r/)[0], "name");
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

			let dataCond = data.match(/cond=('|").*('|")/g);

			return dataCond[0].replace(/cond=('|")/, "").replace(/('|")$/, "");
		};
		let condTagsArray = html.split(/<if |<else-if /);
		condTagsArray
			.forEach((e, i) => {
				if (i > 0) {
					let cond = getCond(e);

					let matchState = false;
					let condDefined;
					this.states.forEach(e => {

						let name = typeof e === "object" ? e.key : e;
						condDefined = cond.match(/^\w*/)[0];
						if(name === condDefined)
							matchState = true;
					});
					if (!matchState)
						new global.UndefinedStateError({type:"conditional", name:condDefined});
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
		let loopsTagsArray = html.split(/<for /);

		loopsTagsArray
			.forEach((e, i) => {
				if (i > 0) {
					let valueAndState = e.match(/val=('|").*(?=('|")>)/)[0];
					let stateToMap = valueAndState.replace(/^.*in /, "").replace(/('|").*/, "");
					
					let matchState = false;
					this.states.forEach(e => {

						if(stateToMap === (typeof e === "object" ? e.key : e))
							matchState = true;
					});
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
		let jsonToString = JSON.stringify(json); //Convert to String
		let quoteMatch = jsonToString.match(/"\w*"(?=:)/g); //Get Object keys
		quoteMatch.forEach(e => {
			//Add indents and delete quotes in state keys
			jsonToString = jsonToString.replace(e, `\t\t\t${e.slice(1, e.length-1)}`);
		});
		//Filter Globals
		this._globals.forEach(glob => {
			jsonToString = jsonToString.replace(new RegExp(`('|")${glob}('|")`), glob);
		});
		//Return JSON Prettify
		return jsonToString.replace(/\{/g, "{\n")
			.replace(/,(?=(\t)*\w*:)/g, ",\n")
			.replace(/}/g, "\n\t\t\t}")
			.replace(/\t\t}$/g, "\t}")
			.replace(/:(?="|\d|true|false|\{|\[)/g, ": ");
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
					let name = e.match(/name=('|")\w*/)[0].slice(6);
					let splitted = e.split("</component>");
					let tag = splitted[0].split(/\r\n|\n|\r/)[0];
					return tag.replace(/name=('|")\w*('|")/, name).replace(">", "/>") + splitted[1];
				}
				return e;
			})
			.join("<");
		/*
		 *	Get all data that was be declared with "{Name - Type}" format.
		 */
		let _getBarsSyntax = html
			.split("{")
			.map((e, i) => {
				if (i > 0) {
					let match = e.match(/.*(?=\})/g); //Get All that continue with "}" 
					if(match) {
						return match[0];
					}
					new global.ExpectedTokenError(e);
				}
			}).filter(a => {
				//Filter the undefined values
				return a;
			});
			//Handle Error
		_getBarsSyntax.forEach(e => {
			if (/^\w*$/.test(e))
				return;

			if (/\w*\s*-\s*(state|prop|computed)/.test(e) === false)
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
	 * @param {String} type 
	 * 
	 * @return {Array}
	 */
	_filterJS(JsArray, type){
		//Watch if have Content
		if (JsArray.length > 0) {
			//Map JS Content
			let JsonArray = JsArray.map(({content, name}) => {
				if (/^async/.test(content))
					name = `async ${name}`;
				
				let params = content.match(/\(.*\)|(\w*(?=\s*=>))/)[0];
				content = content.replace(/.*(?={)/, "");

				var data = content; //Asign content to var data
				/*
					Map exist state to asign the state declaration to data

					Example: If var 'name' is a state 
					On React was be: 'this.state.name' 
					and on Vue was be: 'this.name'
				*/
				data = this._expressionsFilter(content, type);

				if (type === "r")
					data = this._setStateFilter(data);

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
		const ast = parse(code);
		const parsed = ast.tokens.map(e => {
			const matchVar = new RegExp(`(var|let|const)\\s*${e.value}`).exec(code);
			const matchFuntion = new RegExp(`${e.value}\\s*\\(.*\\)`).exec(code);
			const matchParam = new RegExp(`\\(\\s*(\\w*\\s*,\\s*)*${e.value}(\\w*\\s*,\\s*)*\\)\\s*{|\\(\\s*(\\w*\\s*,\\s*)*${e.value}(\\w*\\s*,\\s*)*\\)\\s*=>\\s*{|\\s*${e.value}\\s*=>`).exec(code);
			const objectParam = new RegExp(`^${e.value}\\s*:`).exec(code.slice(e.start));

			var type = e.type.label;
			if (matchVar !== null)
				type = matchVar[1];
		
			else if (matchFuntion !== null)
				type = "function";
			else if (matchParam !== null || objectParam !== null)
				type = "param";
		
			return {
				type,
				position: e.start,
				value: e.value
			};
		});
		
		const vars = parsed.filter(e => /var|let|const|param/.test(e.type));
		const data = parsed.filter(e => /function|name/.test(e.type));
	
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
	 * @param {String} type 
	 * 
	 * @return {String}
	 */
	_expressionsFilter(code, type) {
		//Filter States
		var filtered = code;

		const {data} = this._parseJS(code);
		const isReact = type === "r";
		const stateReplacemment = isReact ? "this.state." : "this.";
		const propReplacemment = isReact ? "this.props." : "this.";

		data.reverse().forEach(({value, position}) => {
			var isState = false;
			var isMethod = false;
			var isProp = false;
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
			for (let i = 0; i <= this._props.length; i++) {
				const prop = this._props[i];

				if (value === prop) {
					isProp = true;
					break;
				}
			}
			for (let i = 0; i <= this._methods.length; i++) {
				const method = this._methods[i];

				if (value === method) {
					isMethod = true;
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
		let _isString = /^("|').*('|")$/.test(string);
		let _isDigit = /^\d*$/.test(string);
		let _isBoolean = /(true|false)$/g.test(string);
		let _isArray = /^\[.*\]$/.test(string);
		let _isObject = /^\{(\r|\n)*((\t*).*(\r|\n*))*\}/g.test(string);
		let _isNull = /null$/g.test(string);
		let _isUndefined = /undefined$/g.test(string);
		let _isNaN = /NaN$/g.test(string);
		let _isInfinity = /Infinity$/g.test(string);

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
		let filtered = string;
		//If is Object, parse the content
		if(string.startsWith("{")){
			filtered = filtered
				.replace(/:/g, "\":")
				.replace(/(\t|\s\s|\s\s\s\s)(?=.*:)/g, "\t\"")
				.replace(/(\t|\s\s|\s\s\s\s)"(?=\t")/g, "\t")
				.replace(/,(?=\n(\t)*})/g, "")
				.replace(/""/g, "\"");
		}
		return JSON.parse(filtered);
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
			const content = line.match(/>.*/)[0].replace(">", "");
			var attr = line.match(/.*>/)[0].replace(/>/, "");
	
			attr = attr.split(/\s(?=:*\w*=('|"))/)
				.filter(e => /\w*=("|')/.test(e))
				.map(e => {
					const isBind = e[0] === ":";
	
					if (isBind) e = e.slice(1);
				
					const splitted = e.split("=");
					const name = splitted[0];
	
					splitted.shift();
	
					const value = splitted.join("=").replace(/^("|')|('|")$/g, "");
	
					return {
						name,
						value,
						isBind
					};
				});
			var mode;
			var type;
		
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
	
		parsedCode.forEach(({type, mode, tag, content, attr}, i) => {
			const isOpen = mode === "open";
			if (i === 0) {
				parts.push({tag, tree: Object.assign([], tree).join(","), content: `<${tag}>@content@</${tag}>`, type: "root"});
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
						parts.push({tag, tree: Object.assign([], tree).join(","), content:`const loop${i} = ${state}.map(${toMap} => (@content@))`, type:"loop"});
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
						const attributes = attr.map(({name, value, isBind}) => {
							if (name.startsWith("on")) {
								name = `on${  this._generateJSXEventName(name.slice(2))}`;
								value = `${(value.endsWith(")") ? "{() => this." : "{this.") + value  }}`;
							} else {
								if (isBind) value = `{${value}}`;
							}
							return `${name}=${value}`;
	
						}).join(" ");
						parts.push({tag, tree: Object.assign([], tree).join(","), type: "content", content: `<${tag}${attributes ? ` ${  attributes}` : ""}>${content ? content : "@content@"}</${tag}>`});
					}
					tree.push(tag);
				}
				else if (mode === "single") {
					const attributes = attr.map(({name, value, isBind}) => {
						if (name.startsWith("on")) {
							name = `on${  this._generateJSXEventName(name.slice(2))}`;
							value = `${(value.endsWith(")") ? "{() => this." : "{this.") + value  }}`;
						} else {
							if (isBind) value = `{${value}}`;
						}
						return `${name}=${value}`;
					}).join(" ");
					parts.push({tag, tree: Object.assign([], tree).join(","), type, content: `<${tag}${attributes ? ` ${  attributes}` : ""}/>`});
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
							part = `{${init.content.match(/\w*(?=\s*= @)/)[0]}}`;
						
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
					if (!/@content@/.test(part))
						part = `${part  }@content@`;
					
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
	 * @description JSX Generator Inerface
	 * @protected
	 * @param {String} HTML
	 *
	 * return {Object}
	 */
	_generateJSX(HTML) {
		return this._JSXGenerator(this._generateJSXAst(this._parseHTML(HTML)));
	}
}

export default StateManagement;
