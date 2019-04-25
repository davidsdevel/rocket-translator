import StateManagement from "./StateManagement";
import JavaScriptEvents from "Const/Events.json";

/**
 * Class React State Management
 * 
 * @class
 * @extends StateManagement
 */
class ReactStateManagement extends StateManagement {
	constructor(){
		super();
		this.condStates = new Array();
		this.loopsState = new Array();

		//Arroy to map on prerender logical
		this.prerenderComputed = new Array();
		this.condWasMapped = false;
		this.loopsWasMapped = false;
	}
	/**
	 * Get Components To Import (getter)
	 * 
	 * @description Set Components Imports to String Template
	 * @public
	 * @return {string}
	 */
	get importComponents(){
		let components = "";
		if (this.components.length > 0) {
			this.components.forEach(e => {
				components += `import ${e} from "./components/${e}"\n`; //Add Import for each Component Value
			});
		}
		return components;
	}
	/**
	 * Get Component Data (getter)
	 * 
	 * @public
	 * @return {string}
	 */
	get componentData(){
		const haveStates = this.states.length > 0;
		const haveLifecycles = this.lifecycle.length > 0;
		const haveComputed = this.computed.length > 0;
		const haveMethods = this.methods.length > 0;
		const haveWatchers = this.watchers.length > 0;
		
		var componentDidUpdateContent = "";

		//Empty vars to append into template
		let states = "";
		let lifecycle = "";
		let computed = "";
		let methods = "";
		let bindMethods = "";
		let bindComputeds = "";
		let bindLifecycles = "";
		let watchers = "";
		let inputHandler = "";

		//Map States
		if (haveStates) {
			var mappedStates = {}; //Empty Object to set States
			this.states.forEach(state => {
				let isObject = typeof state === "object";

				let stateName =  isObject ? state.key : state.replace(/("|')/g, "");
				
				mappedStates[stateName] = isObject ? state.value : "";
			});
			states = `\n\t\tthis.state = ${this._JSONPrettify(mappedStates)};`; //Set States
		}
		if (haveLifecycles) {
			var mappedBindLifecycles = [];
			const mappedLifecycle = this.lifecycle.map(({name, content}) => {
				if (haveWatchers && name === "componentDidUpdate") {
					componentDidUpdateContent = content
						.replace(/(.*)\s*{/, "")
						.replace(/}$/, "");

					return "";
				}
				mappedBindLifecycles.push(`this.${name} = this.${name}.bind(this);`);

				return `${name}${content}\n\t`;
			});

			lifecycle = `${mappedLifecycle.join("\n\t")}\n\t`;
			
			bindLifecycles = `\n\t\t${mappedBindLifecycles.join("\n\t\t")}`;
		}

		//Map Computed Properties
		if (haveComputed) {
			let mappedComputed = this.computed.map(({name, content}) => {
				this.prerenderComputed.push(`var ${name} = this.${name}();\n\t\t`);
				return `${name}${content}`;
			});
			computed = `${mappedComputed.join("\n\t")}\n\t`;

			//Add to bind methods
			let mappedBindComputed = this.computed.map(({name}) => {
				let sliced = name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			});
			bindComputeds = `\n\t\t${mappedBindComputed.join("\n\t\t")}`;
		}

		//Methods
		if(haveMethods){
			let mappedMethods = this.methods.map(({name, content}) => {
				return `${name}${content}`;
			});
			methods = `${mappedMethods.join("\n\t")}\n\t`;

			//Add to bind methods
			let mappedBindMethods = this.methods.map(({name}) => {
				let sliced = name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			});
			bindMethods = `\n\t\t${mappedBindMethods.join("\n\t\t")}`;
		}

		//Map State Watchers
		if (haveWatchers) {
			const filteredJs = this._filterJS(this.watchers, "r");
			const watchToMap = filteredJs.concat([{name: "rocketComponentDidUpdate", content:componentDidUpdateContent}]);
			//Filter Content And Map Watchers
			let mappedWatchers = watchToMap
				.map(({name, content}, i) => {
					
					if (name === "rocketComponentDidUpdate")
						return content;
					
					const param = content.match(/\w*(?=\s*(\)|=>))/)[0];
					content = content.replace(/.*(?={)/, "");
					let stateOrProp = "";

					//Watch if is a state
					for (let i = 0; i < this.states.length; i++) {
						if (stateOrProp === "state.")
							break;

						const stateName = typeof this.states[i] === "object" ? this.states[i].key : this.states[i];
						if (name === stateName)
							stateOrProp = "state.";
					}

					if (!stateOrProp) {
					//Watch if is a prop
						for (let i = 0; i < this.states.length; i++) {
							if (stateOrProp === "prop.")
								break;

							const stateName = typeof this.states[i] === "object" ? this.states[i].key : this.states[i];
							if (name === stateName)
								stateOrProp = "prop.";
						}
					}

					let conditional = i === 0 ? "if" : "else if";
					return `${conditional} (${stateOrProp + name}) ${content.split(/\n/).join("\n\t").replace(/^{/, `{\n\t\t\tlet ${param} = ${stateOrProp + name};`)}`;
				});
			watchers = `componentDidUpdate(prop, state){\n\t\t${mappedWatchers.join(" ")}\n\t}`;
		}

		//Map Input Handler
		if (this.handleInputs) {
			inputHandler = "inputHandler({target}){\n\t\tlet {name, type} = target;\n\t\tlet value = type === 'checkbox' ? target.checked : target.value;\n\t\tthis.setState({\n\t\t\t[name]: value\n\t\t});\n\t}\n\t";
		}
		//If don't have data return empty
		if (
			!states &&
			!computed &&
			!methods &&
			!watchers &&
			this.props.length === 0
		) {
			return "";
		}

		return `constructor() {\n\t\tsuper();${states}${bindMethods}${this.handleInputs ? "\n\t\tthis.inputHandler = this.inputHandler.bind(this);" : ""}${bindLifecycles}${watchers ? "\n\t\tthis.componentDidUpdate = this.componentDidUpdate.bind(this);" : ""}${bindComputeds}\n\t}\n\t${lifecycle}${computed}${methods}${inputHandler}${watchers}`;
	}
	/**
	 * Map Conditionals
	 *
	 * @private
	 * @param {string} html
	 * 
	 * @return {string} 
	 */
	_mapConditionals(html) {
		let splittedCond = html.split(/<(?=if\s*cond)/);
		
		this.conditionals.forEach((conditionalData, i) => {
			let id = ""; //Empty String to set a conditional ID

			/*
			 * Generate ID
			 */
			for (let a = 0; a <= 3; a++) {
				id += new String(Math.floor(Math.random()*10));
			}

			if(splittedCond.length > 1) {

				//Get Conditional HTML Content
				let condTag;
				if (conditionalData.else)
					condTag = "</else>";
				else if (conditionalData.elseIf)
					condTag = "</else-if>";
				else
					condTag = "</if>";

				let replaced = splittedCond[i+1].split(condTag);
				let latestIndexOfReplaced = replaced[replaced.length - 1];
				//We replace that content with the conditional ID
				//And replace the content in the main Array
				splittedCond[i+1] = `{cond_${id}}${latestIndexOfReplaced}`;

				/*-----------Data for If --------------*/
				let filterIf = this._filterConditionalHTML(conditionalData.if);

				/*-----------Data for Else If --------------*/
				let filterElseIf;
				if (conditionalData.elseIf)
					filterElseIf = conditionalData.elseIf.map(con => {
						return {
							cond:con.cond,
							tag:con.tag,
							content:this._filterConditionalHTML(con.content)
						};
					});
				/*-----------Data for Else --------------*/
				let filterElse;
				if (conditionalData.else)
					filterElse = this._filterConditionalHTML(conditionalData.else);
				

				this.condStates.push({
					id,
					cond:conditionalData.cond,
					tagIf:conditionalData.tagIf,
					tagElse:conditionalData.tagElse,
					elseIf:filterElseIf,
					if:filterIf,
					else:filterElse
				});
			}
		});
		this.condWasMapped = true;
		return splittedCond.join("");
	}
	/**
	 * Filter Conditional HTML
	 * 
	 * Get the conditional HTML and filter all HTML single tags
	 * 
	 * @private
	 * @param {String} html 
	 * 
	 * @return {String}
	 */
	_filterConditionalHTML(html) {
		let finalHTML = html
			/*Filter Firts Tabs*/
			.replace(/\t|\s\s/g, "")
			/*Filter NewLine*/
			.replace(/(\r\n|\n|\r)/g, "")
			.split(/<(?=img|br|input|hr|wbr|area|track|param|source|col|progress)/)
			.map((content, i) => {
				if (i > 0) { 
					//Add enclosing tag
					return content.replace(/>|\/>/, "/>");
				}
				return content;
			}).join("<");

		//If have a loop
		if(finalHTML.match(/<for\s*val/))
			finalHTML = this._mapLoops(finalHTML);

		return finalHTML;
	}
	/**
	 * Map Loops
	 *
	 * @private
	 * @param {string} html
	 * 
	 * @return {string}
	 */
	_mapLoops(html) {
		let splittedLoops = html.split(/<(?=for\s*val)/);
		this.loops.forEach((loopData, i) => {
			let id = ""; //Empty String to set a Loop ID

			/*
			 * Generate ID
			 */
			for (let a = 0; a <= 3; a++) {
				id += new String(Math.floor(Math.random()*10));
			}

			if(splittedLoops.length > 1) {
				var tag = null;
				const tagRegExp = /\s*tag=('|")\w*(-\w*)*('|")/;

				if (tagRegExp.test(splittedLoops[1]))
					tag = splittedLoops[1].match(tagRegExp)[0]
						.replace(/\s*tag=/, "")
						.replace(/'|"/g, "");
				
				//Replace Content with Loop ID
				let replaced = splittedLoops[i+1].split("</for>");
				replaced[0] = `{loop_${id}}`;
				splittedLoops[i+1] = replaced.join("");

				
				this.loopsState.push({
					id,
					tag,
					state:loopData.state,
					value:loopData.value,
					content:loopData.content.replace(/(\n|\r|\r\n|\t|\s\s*)/g, "")
				});
			}
		});
		this.loopsWasMapped = true;
		return splittedLoops.join("");
	}
	/**
	 * Filter HTML
	 *
	 * Filter HTML String and return with React Syntax
	 * 
	 * @public
	 * @param {string} html
	 *
	 * @return {string}
	 */
	filterHTML(html){
		if (!this.condWasMapped) {
			html = this._mapConditionals(html);	
		}
		if (!this.loopsWasMapped){
			html = this._mapLoops(html);
		}
		html = html
			.replace(/"/g, "'")
			.split(/\{(?=\w*)/g)
			.map((e, i) => {
				if (e) {
					if (i === 0)
						return e;
					
					if (/prop/.test(e))
						return `{this.props.${e.replace(/(\s*-.*\})/g, "}")}`;
					
					if (/computed/.test(e))
						return `{${e.replace(/(\s-.*\})/g, "}")}`;
					
					if (/state/.test(e))
						return `{this.state.${e.replace(/(\s*-.*\})/g, "}")}`;
				
					return `{${e}`;
				}
			})
			.join("")
			.split(/:(?=\w*='\w*)/g)
			.map((e, i) => {
				if (i !== 0) {
					if(/^\w*='\w*'/.test(e)){
						let isState = false;
						let toCompare = e.match(/='\w*(?=')/)[0];
						this.states.forEach(state => {
							state = typeof state === "object" ? state.key : state;
							if (new RegExp(state).test(toCompare)) {
								isState = true;
							}
						});
						return e.replace(/'/, isState ? "{this.state." :  "{").replace(/'/, "}");
					}
					if (/^\w*='\w*\s*-\s*\w*'/.test(e)) {
						var type = "";
						if (/^\w*='\w*\s*-\s*prop'/.test(e))
							type = "this.props.";
						else if(/^\w*='\w*\s*-\s*state'/.test(e))
							type = "this.state.";

						return e.replace(/'(?=\w*)/, `{${type}`).replace(/\s*-\s*.*''/, "}").replace(/}'/, "}}");
					}
					if (/^\w*='(\w*|\w*(\.\w*)*)\s*(<|>|==|===|\?)/.test(e)) {
						let isState = false;
						let toCompare = e.match(/(\w*|\w*(\.\w*)*)(?=\s*(<|>|==|===|\?))/)[0];
						this.states.forEach(state => {
							state = typeof state === "object" ? state.key : state;
							if (new RegExp(state).test(toCompare)) {
								isState = true;
							}
						});
						return e.replace(/'(?=\w*)/, isState ? "{this.state." : "{").replace(/'''/, "\"\"}").replace(/''/, "'}").replace(/='}/, "=''").replace(/}'/, "}}");
					}
				}
				return e;
			})
			.join(" ")
			.replace(/\s-\s.*'/g, "}")
			.split(new RegExp(`on(?=${JavaScriptEvents.join("|")})`))
			.map((e, index) => {
				if (index === 0) {
					return e;
				} else {
					let eventName = e.match(/^\w*/)[0].toLowerCase();
					switch (eventName) {
					case "afterprint":
						eventName = "AfterPrint";
						break;
					case "animationend":
						eventName = "AnimationEnd";
						break;
					case "animationiteration":
						eventName = "AnimationIteration";
						break;
					case "animationstart":
						eventName = "AnimationStart";
						break;
					case "beforeprint":
						eventName = "BeforePrint";
						break;
					case "beforeunload":
						eventName = "BeforeUnload";
						break;
					case "canplay":
						eventName = "CanPlay";
						break;
					case "canplaythrough":
						eventName = "CanPlayThrough";
						break;
					case "contextmenu":
						eventName = "ContextMenu";
						break;
					case "compositionend": 
						eventName = "CompositionEnd";
						break;
					case "compositionstart":
						eventName = "CompositionStart";
						break;
					case "compositionupdate":
						eventName = "CompositionUpdate";
						break;
					case "dblclick":
						eventName = "DoubleClick";
						break;
					case "dragend":
						eventName = "DragEnd";
						break;
					case "dragenter":
						eventName = "DragEnter";
						break;
					case "dragleave":
						eventName = "DragLeave";
						break;
					case "dragover":
						eventName = "DragOver";
						break;
					case "dragstart":
						eventName = "DragStart";
						break;
					case "durationchange":
						eventName = "DurationChange";
						break;
					case "focusin":
						eventName = "FocusIn";
						break;
					case "focusout":
						eventName = "FocusOut";
						break;
					case "hashchange":
						eventName = "HashChange";
						break;
					case "keydown":
						eventName = "KeyDown";
						break;
					case "keypress":
						eventName = "KeyPress"; 
						break;
					case "keyup":
						eventName = "KeyUp";
						break;
					case "loadeddata":
						eventName = "LoadedData";
						break;
					case "loadedmetadata":
						eventName = "LoadedMetadata";
						break;
					case "loadstart":
						eventName = "LoadStart";
						break;
					case "mousedown":
						eventName = "MouseDown";
						break;
					case "mouseenter":
						eventName = "MouseEnter";
						break;
					case "mouseleave":
						eventName = "MouseLeave";
						break;
					case "mousemove":
						eventName = "MouseMove";
						break;
					case "mouseover":
						eventName = "MouseOver";
						break;
					case "mouseout":
						eventName = "MouseOut";
						break;
					case "mouseup":
						eventName = "MouseUp";
						break;
					case "pagehide":
						eventName = "PageHide";
						break;
					case "pageshow":
						eventName = "PageShow";
						break;
					case "pointerdown":
						eventName = "PointerDown";
						break;
					case "pointermove":
						eventName = "PointerMove";
						break;
					case "pointerup":
						eventName = "PointerUp";
						break;
					case "pointercancel":
						eventName = "PointerCancel";
						break;
					case "gotpointercapture":
						eventName = "GotPointerCapture";
						break;
					case "lostpointercapture":
						eventName = "LostPointerCapture";
						break;
					case "pointerenter":
						eventName = "PointerEnter";
						break;
					case "pointerleave":
						eventName = "PointerLeave";
						break;
					case "pointerover":
						eventName = "PointerOver";
						break;
					case "pointerout":
						eventName = "PointerOut";
						break;
					case "popstate":
						eventName = "PopState";
						break;
					case "ratechange":
						eventName = "RateChange";
						break;
					case "timeupdate":
						eventName = "TimeUpdate";
						break;
					case "touchcancel":
						eventName = "TouchCancel";
						break;
					case "touchend":
						eventName = "TouchEnd";
						break;
					case "touchmove":
						eventName = "TouchMove";
						break;
					case "touchstart":
						eventName = "TouchStart";
						break;
					case "transitionend":
						eventName = "TransitionEnd";
						break;
					case "volumechange":
						eventName = "VolumeChange";
						break;
					default:
						eventName = eventName[0].toUpperCase() + eventName.slice(1);
						break;
					}

					if(/='\w*\(\)/.test(e))
						return e.replace(/\w*/, eventName)
							.replace(/'(?=\w*)/, "{this.")
							.replace(/\(\)'(?=\s|\/|>)/, "}");

					if(/='\w*\(.*\)/.test(e))
						return e.replace(/\w*/, eventName)
							.replace(/'(?=\w*)/, "{()=>this.")
							.replace(/\)'(?=\s|\/|>)/, ")}");


					return e.replace(/\w*/, eventName)
						.replace("'", "{")
						.replace("'", "}");
				} 
			})
			.join("on")
			.split(/<input/)
			.map((e, i) => {
				if (i > 0) {
					const haveName = /name=("|')\w*("|')/.test(e);
					let handler = "";
					if (haveName) {
						handler = "onChange={this.inputHandler}";
					}
					return handler + e;
				}
				return e;
			})
			.join("<input ")
			.split(/<textarea/)
			.map((e, i) => {
				if (i > 0) {
					const haveName = /name=("|')\w*("|')/.test(e);
					let handler = "";
					if (haveName) {
						handler = "onChange={this.inputHandler}";
					}
					return handler + e;
				}
				return e;
			})
			.join("<textarea ")
			.split(/<select/)
			.map((e, i) => {
				if (i > 0) {
					const haveName = /name=("|')\w*("|')/.test(e);
					let handler = "";
					if (haveName) {
						handler = "onChange={this.inputHandler}";
					}
					return handler + e;
				}
				return e;
			})
			.join("<select ")
			.replace(/class(?=='|={)/g, "className")
			.replace(/for(?=='|={)/g, "htmlFor")
			.split(/<br/)
			.map((e, i) => {
				if (i > 0)
					return e.replace(/>|\/>/, "/>");
				
				return e; 
			}).join("<br")
			.split(/<img/)
			.map((e, i) => {
				if (i > 0)
					return e.replace(/>|\/>/, "/>");
				
				return e; 
			}).join("<img")
			.split(/<input/)
			.map((e, i) => {
				if (i > 0)
					return e.replace(/>|\/>/, "/>");
				
				return e; 
			}).join("<input")
			.split("<component ").map((e, i) => {
				if (i > 0) {
					let name = e.match(/component-name=('|")\w*/)[0].replace(/component-name=('|")/, "");
					let splitted = e.split("</component>");
					let tag = splitted[0].split(/\r\n|\n|\r/)[0];
					return tag.replace(/component-name=('|")\w*('|")/, name).replace(">", "/>") + splitted[1];
				} 
				return e;
			})
			.join("<");

		return html;
	}
	/**
	 * Get Typeof Data
	 * 
	 * Take a conditional state and get if is a State or a Prop
	 * 
	 * @private
	 * @param {String} data
	 * 
	 * @return {String}
	 */
	_getTypeofData(data) {
		const name = data.match(/^\w*/)[0];
		//Map States
		for (let i = 0; i < this.states.length; i++) {

			const state = typeof this.states[i] === "object" ? this.states[i].key : this.states[i];
			if (state === name)
				return `this.state.${data}`;
		}

		//Map Props
		for (let i = 0; i < this.props.length; i++) {
			if (this.props[i] === name)
				return `this.props.${data}`;
		}
	}
	
	/**
	 * Prerender Logical (getter)
	 *
	 * Set logical to execute while render the component
	 *
	 * @return {string}
	 *
	 */
	get prerenderLogical(){
		this.loopsWasMapped = false;
		let loops = this.loopsState.map(e => {
			var content;

			if (e.tag !== null)
				content = `<${e.tag}>${this.filterHTML(e.content)}</${e.tag}>`;
			else
				content = this.filterHTML(e.content);

			return `var loop_${e.id} = this.state.${e.state}.map(${e.value}=>\n\t\t\t(${content})\n\t\t);\n\t\t`;
		});
		this.condWasMapped = false;
		let cond = this.condStates.map(e => {
			
			var ifContent;
			if (e.tagIf)
				ifContent = `<${e.tagIf}>${e.if}</${e.tagIf}>`;
			else {
				if (/^\w*/.test(e.if[0]))
					ifContent = `"${e.if}";`;
				else
					ifContent = e.if;
			}

			var elseContent;
			if (e.else) {
				if (e.tagElse)
					elseContent = `<${e.tagElse}>${e.else}</${e.tagElse}>`;
				else {
					if (/^\w*/.test(e.else[0]))
						elseContent = `"${e.else}";`;
					else
						elseContent = e.else;
				}
			}
		
			return `var cond_${e.id};\n\t\tif(${this._getTypeofData(e.cond)}) {\n\t\t\tcond_${e.id} = ${this.filterHTML(ifContent)}\n\t\t} ${e.elseIf ? e.elseIf.map(con => {
				var content;
				if (con.tag)
					content = `<${con.tag}>${con.content}</${con.tag}>`;
				else {
					if (/^w*/.test(con.content[0]))
						content = `"${con.content}";`;
					else
						// eslint-disable-next-line prefer-destructuring
						content = con.content;
				}
				return `else if (${this._getTypeofData(con.cond)}) {\n\t\t\tcond_${e.id} = ${this.filterHTML(content)}\n\t\t}\n\t\t`;
			
			}).join(""):""}${e.else ? `else {\n\t\t\tcond_${e.id} = ${this.filterHTML(elseContent)}\n\t\t}\n\t\t`:""}`;
		});
		this.condStates = [];
		this.loopsState = [];
		return `${loops ? loops.join(""):""}${cond ? cond.join("") : ""}${this.prerenderComputed.length > 0 ? this.prerenderComputed.join(""):""}`;
	}
}

export default ReactStateManagement;
