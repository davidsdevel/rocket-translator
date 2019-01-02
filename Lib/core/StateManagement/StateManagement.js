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
		this._inputs = false;
		this._cond = new Array();
		this._loops = new Array();

		this._regExpToMatchState = /^\w*\s\-\sstate$/g; //RegExp to get State With Declaration
		this._regExpToMatchStateWithValue = /^\w*\s\-\sstate\s\-\s.*$/g; //RegExp to get State With Value
		this._regExpToMatchComputed = /^\w*\s\-\scomputed/g; //RegExp to get Computed Methods
		this._regExpToMatchProps = /^\w*\s\-\sprop/g; //RegExp to get Props

		this.componentsContent = new Array();
	}

	//--------------- Public Methods -----------------

	/**
	 * Get States, Computed, Methods and Components
	 * 
	 * @public
	 * @param {string} html
	 */
	getHTMLString(html){
		//Reset Data Arrays
		this._states = [];
		this._computed = []; 
		this._methods = []; 
		this._components = [];
		this._watchers = [];
		this._props = [];
		this._cond = [];
		this._loops = [];
		this.componentsContent = [];
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
			this._filterJS(JSParsed, type).forEach(e=>{
				//Map Methods
				this.methods.forEach((method, i)=>{ 
					if (e.name === method.name) {
						this._methods[i].content = e.content;
						this._methods[i].params = e.params;
					}
				});
				//Map Computed
				this.computed.forEach(({name}, i)=>{
					if (e.name === name) {
						this._computed[i].content = e.content;
					}
				});
			});
		}
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
		this.states.forEach((state, i)=>{
			if (typeof state === "object") {
				//If match replace the corresponding state
				if (state.value.var && VarsArray.length > 0) {
					VarsArray.forEach(({name, value})=>{
						if (state.value.var === name) {
							this._states[i] = {
								key:state.key,
								value:this._defineTypeFromString(value)
							}
						}
						else new global.MissingVarError(state.key, state.value.var);
					});
				}
				else new global.MissingVarError(state.key, state.value.var);
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
		if (statesArray) {
			//Map State Array
			statesArray.forEach(e=>{
				if (typeof e === "object"){
					//If is not an Array or an Object
					if (!e.value.startsWith("{") && !e.value.startsWith("[")) {
						e.value = e.value.replace(/"/g, "'").replace(/'/g, ""); //Delete quotes to get Type
					}
					e.value = this._defineTypeFromString(e.value); //Get Type
				}
				this._states.push(e); //Push To Component States
			})
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
			this._watchers = watchersArray;
		}
	}
	get watchers(){
		return this._watchers;
	}
	/**
	* Get Component Name And Data
	* 
	* @private
	* @param {string} html 
	*/
	set components(html){
		let _matchComponents = html.match(/\<([A-Z]\w*).*\/\>/g); //Match Components
		if (_matchComponents) {
			_matchComponents.forEach(e=>{
				let name = e.match(/[A-Z]\w*/g)[0]; //Get Component Name
				let bindData = e.match(/\:\w*\=(\'|\")\w*(\'|\")/g); //Get Bind Prop Data
				let bindDataHasNameAndValue = e.match(/\:\w*\=(\'|\")\w*\s\-\s('|")\w*('|")(\'|\")/g); //Get Bind Prop Data and Value
				if (bindData) {
					this._states.push(bindData[0].replace(/'|"/g, "").slice(1).split("=")[1]); //Push Bind Data to States
				}
				if(bindDataHasNameAndValue){
					let dataArray = bindDataHasNameAndValue[0].split('='); //Get Data Array
					let keyValue = dataArray[1].split(' - '); //Split Key And Value
					let key = keyValue[0].slice(1); //Set Key Name
					let value = this._defineTypeFromString(keyValue[1].slice(0, keyValue[1].length - 1)); //Get Type of Value and Set it
					this._states.push({key, value}); //Push Bind Data With Value to States
				}
				this._components.push(name);
			})
		}

		let splitComponentWithContent = html.split("<component ");
		splitComponentWithContent.forEach((e, i)=>{
			if (i > 0) {
				let componentName = e.match(/name=('|")\w*/)[0].slice(6);
				let componentContent = e.replace(/.*>(\r\n|\n|\r)/, "").split(/(\r\n|\n|\r)*\t*<\/component>/)[0];
				this._components.push(componentName);
				
				this.componentsContent.push({
					name:componentName,
					content:componentContent
				});
			}
		});
		this.componentsContent.forEach(({name})=>{
			let duplicates = 0;
			this.componentsContent.forEach(ev=>{
				if (name === ev.name) duplicates++;
			});
			if (duplicates > 1) {
				new global.DuplicateComponentError(name);
			}
			
		})
		console.log(this.componentsContent);
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
		dataArray.forEach(e=>{
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

			_computedArray = _computedArray.filter(e=>{
				let duplicate = false;
				computedList.forEach(ev=>{
					if (e.name === ev) duplicate = true;
					else computedList.push(e.name);
				});
				if (!duplicate) return e;
			});
			_computedArray.forEach(e=>{
				this._computed.push({
					name:e.match(/^\w*/g)[0],
					content:"{\n\t\t\treturn 'Hello World'\n\t\t}"
				});
			});
		}
	}
	get computed() {
		return this._computed;
	}
	/**
	 * Get State From Data Array
	 * 
	 * @private
	 * @param {array} dataArray 
	 */
	set states(dataArray){
		/* 
			Capture State Without Value and push to Empty Array
		*/
		let _stateArray = []; //Declare Empty Array to State With Declaration: {name - state}
		dataArray.forEach(e=>{
			let _matched = e.match(this._regExpToMatchState);
			if(_matched){
				_stateArray.push(_matched[0]);
			}
		});
		/* 
			Capture State With Value and Instance and push to Empty Array
		*/       
		let _stateWithValueArray = []; //Declare Empty Array to State With Value: {name - state - someValue}
		dataArray.forEach(e=>{
			let _matched = e.match(this._regExpToMatchStateWithValue); 
			if (_matched) {
				_stateWithValueArray.push(_matched[0]);
			}
		});
		//If State With Declaration, Map and Push to Component States
		if (_stateArray.length > 0){
			_stateArray.forEach(e=>{
				let _stateName = e.match(/^\w*/g)[0]; //Get State Name
				this._states.push(_stateName);
			});
		}

		//If State With Value, Map and Push to Component States
		if (_stateWithValueArray) {
			_stateWithValueArray.forEach(e=>{
				let _getKey = e.match(/^\w*\s/);
				let value = this._defineTypeFromString(e.match(/(\w*|\{.*\}|\[.*\]|(\'|\")\w*(\'|\"))$/)[0]); //Set Value
				let key = _getKey[0].slice(0, _getKey[0].length-1); //Set Key
				this._states.push({key, value });
			});
		}
		this.states.forEach(e=>{
			let array = [];
			let eName = typeof e === "object" ? e.key : e;
				this.states.forEach(ev=>{
					let name = typeof ev === "object" ? ev.key : ev;

					if (eName === name) { 
						array.push(ev);
					}
				});
				if (array.length > 1) new global.DuplicateStateError(array);
		})
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
		let events = html.match(/on\w*=(\"|\')\w*\(.*\)(\"|\')/g); //Match RegExp
		if (events) {
			events.forEach(e=>{
				let split = e.split("=");
				let name = split[1].match(/\w*(?=\()/)[0];
				this._methods.push({
					name,/*Get Method Name*/
					content:"{\n\t\treturn\n\t}" /*Default Value If methods is not declared*/
				});
			});
			let methodsList = ["1234"];

			this._methods = this._methods.filter(e=>{
				let duplicate = false;
				methodsList.forEach(ev=>{
					if (e.name === ev) duplicate = true;
					else methodsList.push(e.name);
				});
				if (!duplicate) return e;
			});
		}
	}
	get methods() {
		return this._methods;
	}
   /**
	* Get Props From Data Array
	* 
	* @private
	* @param {Array} dataArray 
	*/
   set props(dataArray){
	   //Map Array
	   dataArray.forEach(e=>{
		   //If Match Add Prop Name to Props
		   if (e.match(this._regExpToMatchProps)) {
			   this._props.push(e.replace(/\s-\s\w*/g, ""));
		   }
	   })
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
	   let inputs = html.match(/<(input|select|textarea).*(\/\>|\>)/g);
	   if (inputs) {
		   //Map Matches Tags
		   inputs.forEach(e=>{
			   //If the tag have the attr "name" set an input handler
			   let name = e.match(/name=('|")\w*('|")/g);
			   if (name) {
				   let stateKey = name[0].match(/('|")\w*(?="|')/)[0].slice(1); //Get the name value to declare a state
				   this._inputs = true;
				   this._states.push(stateKey); //push to states
			   }
		   })
	   }
   }
   get inputs() {
	   return this._inputs;
   }
   /**
	*/
   set conditionals(html){
	   let condArray = html.split("<if ")
	   .map((e, i)=>{
		   if (i > 0) {
			   let cond = e.match(/cond=('|").*('|")(?=.*>)/g);
			   let contentIf;
			   let contentElse;
			   if (e) {
				   cond = cond[0].replace(/cond=('|")/, "").replace(/('|")$/, "");
				   contentIf = e.replace(/cond=.*>(\r|\n|\r\n)*/, "").split(/(\r|\n|\r\n)*\t*<\/if>/)[0];
				   contentElse = e.split(/<else>(\n|\r|\r\n)*/)[2];
				   if (contentElse) {
					   contentElse = contentElse.split(/(\r|\n)*<\/else>/)[0];
				   }
			   }
			   return {
				   cond,
				   if:contentIf,
				   else:contentElse
			   }
		   } else {
			   return null;
		   }
	   })
	   .filter(e=>{
		   return e;
	   });
	   this._cond = condArray;
   }
   get conditionals() {
	   return this._cond;
   }
   set loops(html){
	   let loopsArray = html.split(/<for /)
		   .map((e, i)=>{
			   let data;
			   if (i > 0) {
				   let valueAndState = e.match(/val=('|").*(?=('|")>)/)[0];
				   let valueToSetInTemplate = valueAndState.replace(/^val=('|")/, "").match(/.*(?=\sin)/)[0];
				   let stateToMap = valueAndState.replace(/^.*in /, "");
				   let loopContent = e.replace(/val=.*>(\n|\r|\r\n)/, "").split(/<\/for>/)[0];
				   data = {
					   value:valueToSetInTemplate,
					   state:stateToMap,
					   content:loopContent
				   };
			   } else {
				   data = null;
			   }
			   return data;
		   })
		   .filter(e=>{
			   return e;
		   });
	   this._loops = loopsArray;
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
		let quoteMatch = jsonToString.match(/\"\w*\"(?=\:)/g); //Get Object keys
		quoteMatch.forEach(e=>{
			//Add indents and delete quotes in state keys
			jsonToString = jsonToString.replace(e, `\t\t\t${e.slice(1, e.length-1)}`);
		})
		//Return JSON Prettify
		return jsonToString.replace(/\{/g, "{\n")
			.replace(/\,(?=(\t)*\w*:)/g, ",\n")
			.replace(/}/g, "\n\t\t\t}")
			.replace(/}$/g, "\n\t\t}")
			.replace(/:(?=\"|\d|true|false|\{|\[)/g, ": ");
	}
	/**
	 * Get All Data From HTML
	 * 
	 * @private
	 * @param {string} html
	 */
	_setDataFromHTML(html){

		this.components = html; //Get Components
		html = html.split("<component ").map((e, i) => {
			if (i > 0) {
				let name = e.match(/name=('|")\w*/)[0].slice(6);
				let splitted = e.split("</component>");
				let tag = splitted[0].split(/\r\n|\n|\r/)[0];
				return tag.replace(/name=('|")\w*('|")/, name).replace(">", "/>") + splitted[1];
			} 
			else return e
		})
		.join("<");

		this.inputs = html; //Get Inputs, Textarea and Options

		this.conditionals = html; //Get conditionals Data

		this.loops = html; //Get Loops Data

		this.methods = html; //Call Method to Get Data from HTML String


		/*
			Get all data that was be declared with "{Name - Type}" format.
		*/
		let _getBarsSyntax = html.split("{").map(e=>{
			let match = e.match(/.*(?=\})/g); //Get All that continue with "}" 

			if(match) return match[0];
		}).filter(a=>{
			//Filter the undefined values
			return a
		})

		if (_getBarsSyntax) {
			this.states = _getBarsSyntax; //Get States
			this.computed = _getBarsSyntax; //Get Computed Methods 
			this.props = _getBarsSyntax; //Get Props
		}   
	}
	/**
	 * Get an Object's Array with JS Data and return with Vue or React Syntax
	 * @param {Array} JsArray 
	 * @param {String} type 
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
					propReplace = "this.props."
					tab = "\t";
					break;
				case "v":
					stateReplace = "this.";
					propReplace = "this."
					tab = "\t\t";
					break;
				default: throw new Error("The type param must be \"v\" or \"r\"");
			}
			//Map JS Content
			let JsonArray = JsArray.map(({content, funcName, name, params})=>{
				var data = content; //Asign content to var data
				/*
					Map exist state to asign the state declaration to data

					Example: If var 'name' is a state 
					On React was be: 'this.state.name' 
					and on Vue was be: 'this.name'
				*/
				this.states.forEach(state=>{
					/*If state is an Object this will be like {key:'foo', value:'var'}
						"key" is the state name.

						If state is not an Object this was be like 'foo' 
						this is the state name without value
					*/
					let stateName = typeof state === "object" ? state.key : state;

					data = this._expressionsFilter(data, stateName, stateReplace);
				});
				this.props.forEach(prop=>{
					data = this._expressionsFilter(data, prop, propReplace)
				})
				return {
					funcName,
					name,
					params,
					content:data
						.split("\n")
						.map((es, i)=>{
							if (es && i > 0 && es != /^}(\s|\t)*$/) return tab+es+"\n"
							else if (es == /^}(\s|\t)*$/) return tab+"}"
							else return es +"\n";
						})
						.join("")
						.replace(/(\n|\r)$/g, "")
				}
			})
			return JsonArray;
		}
	}
	_expressionsFilter(html, name, replace) {
		return html
			.replace(new RegExp(`\\t(${replace+name}|${name})(?!\\(|\\s*\\(|\\.)`, "g"), "\t"+replace+name)
			.replace(new RegExp(`(\\(|\\(\\s*)(${replace+name}|${name})`, "g"), "("+replace+name)
			.replace(new RegExp(`(\\[|\\[\\s*)(${replace+name}|${name})`, "g"), "["+replace+name)
			.replace(new RegExp(`(\\$\\{|\\$\\{\\s*)(${replace+name}|${name})`, "g"), "${"+replace+name)
			.replace(new RegExp(`(=|=\\s*)(${replace+name}|${name})`, "g"), "= "+replace+name)
			.replace(new RegExp(`(>|>\\s*)(${replace+name}|${name})`, "g"), "> "+replace+name)
			.replace(new RegExp(`(<|<\\s*)(${replace+name}|${name})`, "g"), "< "+replace+name)
			.replace(new RegExp(`(~|~\\s*)(${replace+name}|${name})`, "g"), "~"+replace+name)
			.replace(new RegExp(`(\\!|\\!\\s*)(${replace+name}|${name})`, "g"), "\\! "+replace+name)
			.replace(new RegExp(`(:|:\\s*)(${replace+name}|${name})`, "g"), ": "+replace+name)
			.replace(new RegExp(`(\\?|\\?\\s*)(${replace+name}|${name})(?=.*:)`, "g"), "? "+replace+name)
			.replace(new RegExp(`(\\+|\\+\\s*)(${replace+name}|${name})`, "g"), "+ "+replace+name)
			.replace(new RegExp(`(\\-|\\-\\s*)(${replace+name}|${name})`, "g"), "- "+replace+name)
			.replace(new RegExp(`(\\*|\\*\\s*)(${replace+name}|${name})`, "g"), "* "+replace+name)
			.replace(new RegExp(`(\\/|\\/\\s*)(${replace+name}|${name})`, "g"), "/ "+replace+name)
			.replace(new RegExp(`(\\%|\\%\\s*)(${replace+name}|${name})`, "g"), "% "+replace+name)
			.replace(new RegExp(`(return|return\\s*)(${replace+name}|${name})`, "g"), "return "+replace+name)
			.replace(new RegExp(`(typeof|typeof\\s*)(${replace+name}|${name})`, "g"), "typeof "+replace+name)
			.replace(new RegExp(`(\\&|\\&\\s*)(${replace+name}|${name})(!=.*(\\\`|\\"|\\'))`, "g"), "& "+replace+name)
			.replace(new RegExp(`(\\||\\|\\s*)(${replace+name}|${name})(!=.*(\\\`|\\"|\\'))`, "g"), "| "+replace+name)
			.replace(new RegExp(`(in|in\\s*)(${replace+name}|${name})(!=.*(\\\`|\\"|\\'))`, "g"), "in "+replace+name)
			.replace(new RegExp(`(case|case\\s*)(${replace+name}|${name})(!=.*(\\\`|\\"|\\'))`, "g"), "case "+replace+name);
	}
	/**
	 * Get String Value and Parse that
	 * @param {string} string String Value
	 * @returns {any}
	 */
	_defineTypeFromString(string){
		var value; //Empty Value
		let _isString = string.match(/^(\"|\')\w*(\s*\w*)(\'|\")$/);
		let _isDigit = string.match(/^\d*$/);
		let _isBoolean = string.match(/(true|false)$/g);
		let _isArray = string.match(/^\[.*\]$/);
		let _isObject = string.match(/^\{(\r|\n)*((\t*).*(\r|\n*))*\}/g);

		if (_isDigit) {
			value = parseInt(_isDigit[0]);
		} else if (_isBoolean){
			value = this._BooleanParser(_isBoolean[0]);
		} else if(_isArray){
			value = this._ArrayAndObjectParser(_isArray[0]);
		} else if (_isObject){
			value = this._ArrayAndObjectParser(_isObject[0]);
		} else if(_isString){
			value = string.replace(/(\"|\')/g, ""); //String Value
		} else {
			//is Var
			value = {var:string};
		}
		return value
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
				.replace(/(\t|\s\s|\s\s\s\s)\"(?=\t\")/g, "\t")
				.replace(/,(?=\n(\t)*})/g, "")
				.replace(/""/g, "\"");
		}
		return JSON.parse(filtered);
	}
}
module.exports = StateManagement;
