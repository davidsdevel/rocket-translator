require("../ErrorManagement")(); //Define Error Management Globals

/**
 * State Management Base Class
 * 
 * Class that manage HTML String and get all data from these
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
		this._cond = new Array();
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
					if (e.name === method.name) {
						this._methods[i].content = e.content;
					}
				});
				//Map Computed
				this.computed.forEach(({name}, i) => {
					if (e.name === name) {
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
							if (state.value.var === name) {
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
		this._cond = new Array();
		this._loops = new Array();
		this._lifecycle = new Array();

		if (statesArray) {
			this._states = statesArray;
		}
	}
	/**
	 * Set State Watcher
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
	get watchers(){
		return this._watchers;
	}

	/**
	 * Lifecycle Setter
	 * 
	 * @public
	 * @param {Array} lifecycles
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
	get lifecycle() {
		return this._lifecycle;
	}
	/**
	* Get Component Name And Data
	* 
	* @private
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
	get components() {
		return this._components;
	}
	/**
	 * Get Computed Methods from the data Array
	 * 
	 * @private
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
	get computed() {
		return this._computed;
	}
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
	 * Get State From Data Array
	 * 
	 * @private
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
	get states() {
		return this._states;
	}
	/**
	 * Get Methods from HTML String
	 * 
	 * Map and get all HTML events attr like onclick, onsubmit, etc.
	 * 
	 * @public
	 * @param {string} html HTML String
	 */
	set methods(html){
		let events = html.match(/on\w*=("|')\w*\(.*\)("|')/g); //Match RegExp
		if (events) {
			events.forEach(e => {
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
		}
	}
	get methods() {
		return this._methods;
	}
	set propsInBindAttributes(html) {
		html.split(/:(?=\w*=)/).forEach((bindAttr, i) => {
			if (i > 0) {
				const regExpToMatch = /^\w*="(\w*(\s*-\s*\w*)*)"/;
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
	* Get Props From Data Array
	* 
	* @private
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
	get props() {
		return this._props;
	}
	/**
	* Get Input, Textarea and Option Tags from HTML String
	* 
	* @private
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
				else
					new global.ExpectedAttributeError(e.split(/\r\n|\n|\r/)[0], "name");
			});
		}
	}
	get handleInputs() {
		return this._handleInputs;
	}
	/**
	*/
	set conditionals(html){
		//Function to get tag condition
		let getCond = data => {
			let dataCond = data.match(/cond=('|").*('|")(?=.*>)/g);
			return dataCond[0].replace(/cond=('|")/, "").replace(/('|")$/, "");
		};
		let condTagsArray = html.split("<if ");
		let condData = condTagsArray
			.map((e, i) => {
				if (i > 0) {
					let cond = getCond(e);
					let elseIf = [];
					let contentIf;
					let contentElse;
					if (e) {
						contentIf = e.replace(/cond=.*>(\r|\n|\r\n)*/, "").split(/(\r|\n|\r\n)*\t*<\/if>/)[0];
						if(/<else-if/.test(e)) {
							e.split("<else-if").forEach((ev, i) => {
								if (i > 0)
									elseIf.push({
										cond:getCond(ev),
										content:ev.replace(/cond=.*>(\r|\n|\r\n)*/, "").split(/(\r|\n|\r\n)*\t*<\/else-if>/)[0]
									});
							});
						}
						contentElse = e.split(/<else>(\n|\r|\r\n)*/)[2];
						if (contentElse) {
							contentElse = contentElse.split(/(\r|\n)*<\/else>/)[0];
						}
					}
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
					
					return {
						cond,
						if:contentIf,
						elseIf,
						else:contentElse
					};
				}
				return null;
			});
		this._cond = condData.filter(e => {
			return e;
		});
	}
	get conditionals() {
		return this._cond;
	}
	set loops(html){
		let loopsTagsArray = html.split(/<for /);

		let loopsData = loopsTagsArray
			.map((e, i) => {
				if (i > 0) {
					let valueAndState = e.match(/val=('|").*(?=('|")>)/)[0];
					let valueToSetInTemplate = valueAndState.replace(/^val=('|")/, "").match(/.*(?=\sin)/)[0];
					let stateToMap = valueAndState.replace(/^.*in /, "").replace(/('|").*/, "");
					let loopContent = e.replace(/val=.*>(\n|\r|\r\n)/, "").split(/<\/for>/)[0];
					
					let matchState = false;
					this.states.forEach(e => {

						if(stateToMap === (typeof e === "object" ? e.key : e))
							matchState = true;
					});
					if (!matchState)
						new global.UndefinedStateError({type:"loop", name:stateToMap});

					return {
						value:valueToSetInTemplate,
						state:stateToMap,
						content:loopContent
					};
				}
				return null;
			});
			
		this._loops = loopsData.filter(e => {
			return e;
		});
	}
	get loops() {
		return this._loops;
	}

	//------------------------------------------------------------------------------
	/*Internal Methods*/
	
	/**
	 * Convert an Object to String and add new lines and indents to code beauty
	 * 
	 * @protected
	 * @param {Object} json
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

		this.conditionals = html; //Get conditionals Data

		this.loops = html; //Get Loops Data

		this.methods = html; //Call Method to Get Data from HTML String
	}
	/**
	 * Filter Javascript
	 *
	 * Get an Object's Array with JS Data and return with Vue or React Syntax
	 *
	 * @param {Array} JsArray 
	 * @param {String} type 
	 * 
	 * @return {Array}
	 */
	_filterJS(JsArray, type){
		//Watch if have Content
		if (JsArray.length > 0) {
			let stateReplace; //Empty var to set state declaration
			let propReplace; //Empty var to set props declaration
			let tab; //Empty var to set indent to code beauty
			switch (type) {
			case "r":
				stateReplace = "this.state.";
				propReplace = "this.props.";
				tab = "";
				break;
			case "a":
				stateReplace = "this.";
				propReplace = "this.";
				tab = "";
				break;
			case "v":
				stateReplace = "this.";
				propReplace = "this.";
				tab = "\t";
				break;
			default: throw new Error("The type param must be 'v', 'r' or 'a'");
			}
			//Map JS Content
			let JsonArray = JsArray.map(({content, name}) => {
				let params = content.match(/\(.*\)|\w*/)[0];
				content = content.replace(/.*(?={)/, "");

				var data = content; //Asign content to var data
				/*
					Map exist state to asign the state declaration to data

					Example: If var 'name' is a state 
					On React was be: 'this.state.name' 
					and on Vue was be: 'this.name'
				*/
				this.states.forEach(state => {
					/*If state is an Object this will be like {key:'foo', value:'var'}
						"key" is the state name.

						If state is not an Object this was be like 'foo' 
						this is the state name without value
					*/
					let stateName = typeof state === "object" ? state.key : state;
					data = this._expressionsFilter(data, stateName, stateReplace);
				});
				this.props.forEach(prop => {
					data = this._expressionsFilter(data, prop, propReplace);
				});

				if (type === "r")
					data = this._setStateFilter(data);

				return {
					name,
					content:params + data
						.split("\n")
						.map((es, i) => {
							if (es && i > 0 && es != /^}(\s|\t)*$/) return `${tab+es}\n`;
							else if (es == /^}(\s|\t)*$/) return `${tab}}`;
							else return `${es }\n`;
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
	 * 
	 * @param {String} html 
	 * @param {String} name 
	 * @param {String} replace 
	 */
	_expressionsFilter(html, name, replace) {
		var filtered = html
			.replace(new RegExp(`\\t(${replace+name}|${name})(?!\\(|\\s*\\(|\\.)`, "g"), `\t${replace}${name}`)
			.replace(new RegExp(`(\\(|\\(\\s*)(${replace+name}|${name})`, "g"), `(${replace}${name}`)
			.replace(new RegExp(`(\\[|\\[\\s*)(${replace+name}|${name})`, "g"), `[${replace}${name}`)
			.replace(new RegExp(`(\\$\\{|\\$\\{\\s*)(${replace+name}|${name})`, "g"), `\${${replace}${name}`)
			.replace(new RegExp(`(=|=\\s*)(${replace+name}|${name})`, "g"), `= ${replace}${name}`)
			.replace(new RegExp(`(>|>\\s*)(${replace+name}|${name})`, "g"), `> ${replace}${name}`)
			.replace(new RegExp(`(<|<\\s*)(${replace+name}|${name})`, "g"), `< ${replace}${name}`)
			.replace(new RegExp(`(~|~\\s*)(${replace+name}|${name})`, "g"), `~${replace}${name}`)
			.replace(new RegExp(`(\\!|\\!\\s*)(${replace+name}|${name})`, "g"), `\\! ${replace}${name}`)
			.replace(new RegExp(`(:|:\\s*)(${replace+name}|${name})`, "g"), `: ${replace}${name}`)
			.replace(new RegExp(`(\\?|\\?\\s*)(${replace+name}|${name})(?=.*:)`, "g"), `? ${replace}${name}`)
			.replace(new RegExp(`(\\+|\\+\\s*)(${replace+name}|${name})`, "g"), `+ ${replace}${name}`)
			.replace(new RegExp(`(-|-\\s*)(${replace+name}|${name})`, "g"), `- ${replace}${name}`)
			.replace(new RegExp(`(\\*|\\*\\s*)(${replace+name}|${name})`, "g"), `* ${replace}${name}`)
			.replace(new RegExp(`(\\/|\\/\\s*)(${replace+name}|${name})`, "g"), `/ ${replace}${name}`)
			.replace(new RegExp(`(\\%|\\%\\s*)(${replace+name}|${name})`, "g"), `% ${replace}${name}`)
			.replace(new RegExp(`(return|return\\s*)(${replace+name}|${name})`, "g"), `return ${replace}${name}`)
			.replace(new RegExp(`(typeof|typeof\\s*)(${replace+name}|${name})`, "g"), `typeof ${replace}${name}`)
			.replace(new RegExp(`(\\&|\\&\\s*)(${replace+name}|${name})(!=.*(\\\`|"|'))`, "g"), `& ${replace}${name}`)
			.replace(new RegExp(`(\\||\\|\\s*)(${replace+name}|${name})(!=.*(\\\`|"|'))`, "g"), `| ${replace}${name}`)
			.replace(new RegExp(`(in|in\\s*)(${replace+name}|${name})(!=.*(\\\`|"|'))`, "g"), `in ${replace}${name}`)
			.replace(new RegExp(`(case|case\\s*)(${replace+name}|${name})(!=.*(\\\`|"|'))`, "g"), `case ${replace}${name}`)
			.replace(new RegExp(`(\\t|\\s\\s\\s\\s|\\s\\s)(${replace+name}|${name})(?=\\.)`, "g"), `\t${replace}${name}`)
			.replace(new RegExp(`(\\t|\\s\\s\\s\\s|\\s\\s)(${replace+name}|${name})(?=\\+\\+)`, "g"), `\t${replace}${name}`)
			.replace(new RegExp(`(\\t|\\s\\s\\s\\s|\\s\\s)(${replace+name}|${name})(?=\\s*=)`, "g"), `\t${replace}${name}`)
			.replace(new RegExp(`(\\t|\\s\\s\\s\\s|\\s\\s)(${replace+name}|${name})(?=--)`, "g"), `\t${replace}${name}`);

		//To Replace Filtered No States
		const toUnfilter = new RegExp(`(${replace+name}|${name})\\w*`).exec(filtered);

		if (toUnfilter) {
			var isState = false;
			for(let i = 0; i < this.states.length; i++) {
				const state = typeof this.states[i] === "object" ? this.states[i].key : this.states[i];

				if(toUnfilter[0] === `${replace}${state}`) {
					isState = true;
					break;
				}
			}
			if (isState)
				return filtered;
			
			return filtered.replace(toUnfilter[0], toUnfilter[0].replace(replace, ""));
		}
		return filtered;
	}
	/**
	 * Globals
	 * 
	 * Getter that return the global list
	 * 
	 * @private
	 * @return {Array}
	 */
	get _globals () {
		
		const globalList = require("../../const/Globals.json");
		const {defineGlobals} = require(global.defineGlobals);

		return globalList.concat(defineGlobals !== undefined ? defineGlobals() : []);
	}
	/**
	 * Get String Value and Parse that
	 * @param {string} string String Value
	 * @returns {any}
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
	 * Parse Boolean String
	 * 
	 * @param {string} string String Value
	 * @returns {Boolean}
	 */
	_BooleanParser(string){
		if (string === "true")
			return true;
		
		return false;
	}
	/**
	 * Parse Array, Object and Define Type
	 * 
	 * @param {string} string String Value
	 * @returns {Array}
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
}
module.exports = StateManagement;
