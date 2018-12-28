const StateManagement = require("./StateManagement");
const JavaScriptEvents = require("../../const/Events.json");
/**
 * Class React State Management
 * @extends StateManagement
 */
class ReactStateManagement extends StateManagement {
	constructor(){
		super();
		this.condStates = new Array();
		this.loopsState = new Array();
		this.prerenderComputed = new Array();
		this.condMapped = false;
		this.loopsMapped = false;
	}
	/**
	 * Set React Components
	 * 
	 * @description Set Components Imports to String Template
	 * @public
	 * @return {string}
	 */
	setReactComponents(){
		let components = "";
		if (this.components.length > 0) {
			this.components.forEach(e=>{
				components += `import ${e} from "./components/${e}"\n`; //Add Import for each Component Value
			})
		}
		return components;
	}
	/**
	 * Set React States Into Template
	 * 
	 * @public
	 * @return {string}
	 */
	setReactStateToTemplate(){
		//Empty vars to append into template
		let states = "";
		let computed = "";
		let methods = "";
		let bindMethods = "";
		let bindComputeds = "";
		let watchers = "";
		let inputHandler = "";

		//Map States
		if (this.states.length > 0) {
			var _mappedStates = {}; //Empty Object to set States
			this.states.forEach(e=>{
				if (typeof e === "object") {
					_mappedStates[e.key] = e.value;
				} else if (typeof e === "string"){
					_mappedStates[e.replace(/(\"|\')/g, "")/*Delete String Quotes*/] = "";
				}
			})
			states = `\n\t\tthis.state = ${this._JSONPrettify(_mappedStates)};`; //Set States
		}
		//Map Computeds
		if (this.computed.length > 0) {
			let mappedComputed = this.computed.map(({name, content})=>{
				this.prerenderComputed.push(`var ${name} = this.${name}();\n\t\t`);
				return `${name}()${content}`;
			});
			computed = "\n\t"+mappedComputed.join("\n\t");

			let mappedBindComputeds = this.computed.map(({name})=>{
				let sliced = name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			})
			bindComputeds = "\n\t\t"+mappedBindComputeds.join("\n\t\t");
		}
		//Methods
		if(this.methods.length > 0){
			let mappedMethods = this.methods.map(({name, content, params})=>{
				return `${name}(${params}) ${content}`;
			})
			methods = "\n\t"+mappedMethods.join("\n\t");

			let mappedBindMethods = this.methods.map(({name})=>{
				let sliced = name.replace("()", "");
				return `this.${sliced} = this.${sliced}.bind(this);`;
			})
			bindMethods = "\n\t\t"+mappedBindMethods.join("\n\t\t");
		}
		if (this.watchers.length > 0) {
			let mappedWatchers = this._filterJS(this.watchers, "r").map(({name, content, params},i)=>{
				let isState = false;
				let isProp = false;

				this.states.forEach(state=>{
					if (name === state || name === state.key) {
						isState = true;
					}
				})
				if (!isState) {
					this.props.forEach(prop=>{
						if (prop === name) {
							isProp = true;
						}
					})
				}

				let bifurcacion = "";
				if (i === 0) {
					bifurcacion = "if";
				} else {
					bifurcacion = "else if";
				}
				let stateOrProp = "";
				if (isState) {
					stateOrProp = "state.";
				} else if (isProp) {
					stateOrProp = "prop.";
				}
				let final = `${bifurcacion} (${stateOrProp + name}) ${content.split(/\n/).join("\n\t").replace(/^{/, "{\n\t\t\tlet " + params + " = " + stateOrProp + name + ";").replace(/}$/, "}")}`;
				return final;
			})
			watchers = `\n\tcomponentDidUpdate(prop, state){\n\t\t${mappedWatchers.join(" ")}\n\t}`;
		}
		if (this.inputs) {
			inputHandler = `
	inputHandler({target}){
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}`;
		}

		let mainTemplate = 	
	`constructor(${this.props.length > 0 ? "props": ""}) {
		super(${this.props.length > 0 ? "props": ""});${states}${bindMethods}${watchers ? "\n\t\tthis.componentDidUpdate = this.componentDidUpdate.bind(this);" : ""}${bindComputeds}
	}${computed}${methods}${inputHandler}${watchers}`;
		if (!states && !computed && !methods && !watchers && this.props.length === 0) {
			 mainTemplate = "";
		}
		return mainTemplate
	}
	mapConditionals(htmlIn) {
		let splittedCond = htmlIn.split(/<(?=if\s*cond)/);
		let splittedLoops = htmlIn.split(/<(?=for\s*val)/);
		this.conditionals.forEach((e, ind)=>{
			let id = "";
			for (let a = 0; a <= 3; a++) {
				id += new String(Math.floor(Math.random()*10));
			}
			if(splittedCond.length > 1) {
				let replaced = splittedCond[ind+1].split("</else>");
				replaced[0] = `{cond_${id}}`;
				splittedCond[ind+1] = replaced.join("");

				let filterIf = e.if
					.replace(/\t|\s\s/g, "")
					.replace(/(\n|\r\n|\r)/g, "")
					.split(/<(?=img|br|input)/)
					.map((ev, i)=>{
						if (i > 0) return ev.replace(/>|\/>/, "/>");
						else return ev;
					}).join("<");

				if(filterIf.match(/<for\s*val/))
					filterIf = this.mapLoops(filterIf);

				let filterElse = e.else
					.replace(/\t|\s\s/g, "")
					.replace(/(\n|\r\n|\r)/g, "")
					.split(/<(?=img|br|input)/)
					.map((ev, i)=>{
						if (i > 0) return ev.replace(/>|\/>/, "/>");
						else return ev;
					}).join("<");

				if(filterElse.match(/<for\s*val/))
					filterElse = this.mapLoops(filterElse);

				this.condStates.push({
					id,
					cond:e.cond,
					if:filterIf,
					else:filterElse
				});
			}
		});
		this.condMapped = true;
		return splittedCond.join("");
	}
	mapLoops(htmlIn) {
		let splittedLoops = htmlIn.split(/<(?=for\s*val)/);
		this.loops.forEach((e, ind)=>{
			let id = "";
			for (var i = 0; i <= 3; i++) {
				id += new String(Math.floor(Math.random()*10));
			}
			if(splittedLoops.length > 1) {
				let replaced = splittedLoops[ind+1].split("</for>");
				replaced[0] = `{loop_${id}}`;
				splittedLoops[ind+1] = replaced.join("");

				
				this.loopsState.push({
					id,
					state:e.state,
					value:e.value,
					content:e.content.replace(/(\n|\r|\r\n|\t|\s\s*)/g, "")
				});
			}
		});
		this.loopsMapped = true;
		return splittedLoops.join("");
	}
	setReactFilterHTMLState(html){
		if (!this.condMapped) {
			html = this.mapConditionals(html);	
		}
		if (!this.loopsMapped){
			html = this.mapLoops(html);
		}
		html = html
			.replace(/"/g, "'")
			.split(/\{(?=\w*)/g)
			.map((e, i)=>{
				if (e) {
					let str;
					if (i === 0) {
						str = e;
					} else if (e.match(/prop/)) { 
						str = "{this.props."+e.replace(/(\s-.*\})/g, "}");
					}else if (e.match(/computed/)) {
						str = "{"+e.replace(/(\s-.*\})/g, "}");
					} else if (e.match(/state/)){
						str = "{this.state."+e.replace(/(\s-.*\})/g, "}");
					} else {
						str = "{"+e
					}
					return str;
				}
			})
			.join("")
			.split(/:(?=\w*='\w*)/g)
			.map((e, i)=>{
				let valueToReturn;
				if (i !== 0) {
					if(e.match(/^\w*='\w*'/)){
						let isState = false;
						let toCompare = e.match(/='\w*(?=')/)[0];
						this.states.forEach(state=>{
							state = typeof state === "object" ? state.key : state;
							if (toCompare.match(new RegExp(state))) {
								isState = true;
							}
						})
						valueToReturn = e.replace(/'/, isState ? "{this.state." :  "{").replace(/'/, "}");
					} else if (e.match(/^\w*='\w*\s*\-\s*\w*'/)) {
						let isState = false;
						let toCompare = e.match(/^\w*='\w*/g)[0];
						this.states.forEach(state=>{
							state = typeof state === "object" ? state.key : state;
							if (toCompare.match(new RegExp(state))) {
								isState = true;
							}
						})
						valueToReturn = e.replace(/'(?=\w*)/, isState ? "{this.state." : "{").replace(/\s*-\s*.*''/, "}").replace(/}'/, "}}");
					} else if (e.match(/^\w*='(\w*|\w*(\.\w*)*)\s*(\<|\>|\=\=|\=\=\=|\?)/)) {
						let isState = false;
						let toCompare = e.match(/(\w*|\w*(\.\w*)*)(?=\s*(\<|\>|\=\=|\=\=\=|\?))/)[0];
						this.states.forEach(state=>{
							state = typeof state === "object" ? state.key : state;
							if (toCompare.match(new RegExp(state))) {
								isState = true;
							}
						});
						valueToReturn = e.replace(/'(?=\w*)/, isState ? "{this.state." : "{").replace(/'''/, "\"\"}").replace(/''/, "'}").replace(/='}/, "=''").replace(/}'/, "}}");
					}
				} else {
					valueToReturn = e;
				}
				return valueToReturn;
			})
			.join(" ")
			.replace(/\s\-\s.*'/g, "}")
			.split(new RegExp(`on(?=${JavaScriptEvents.join("|")})`))
			.map((e, index)=>{
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
					if(e.match(/='\w*\(\)/)) {
						return e.replace(/\w*/, eventName)
							.replace(/'(?=\w*)/, "{this.")
							.replace(/\(\)'(?=\s|\/|\>)/, "}");

					} else if(e.match(/='\w*\(.*\)/)) {
						return e.replace(/\w*/, eventName)
							.replace(/'(?=\w*)/, "{()=>this.")
							.replace(/\)'(?=\s|\/|\>)/, ")}");
					} else {
						return e.replace(/\w*/, eventName)
							.replace("'", "{")
							.replace("'", "}");
					}
				} 
			})
			.join("on")
			.split(/<input/)
			.map((e, i)=>{
				if (i > 0) {
					let name = e.match(/name=("|')\w*("|')/);
					let handler = "";
					if (name) {
						handler = `onChange={this.inputHandler.bind(this)}`;
					}
					return handler + e;
				} else return e;
			})
			.join("<input ")
			.split(/<textarea/)
			.map((e, i)=>{
				if (i > 0) {
					let name = e.match(/name=("|')\w*("|')/);
					let handler = "";
					if (name) {
						handler = `onChange={this.inputHandler.bind(this)}`;
					}
					return handler + e;
				} else return e;
			})
			.join("<textarea ")
			.split(/<select/)
			.map((e, i)=>{
				if (i > 0) {
					let name = e.match(/name=("|')\w*("|')/);
					let handler = "";
					if (name) {
						handler = `onChange={this.inputHandler.bind(this)}`;
					}
					return handler + e;
				} else return e;
			})
			.join("<select ")
			.replace(/class(?=='|={)/g, "className")
			.replace(/for(?=='|={)/g, "htmlFor")
			.split(/<br/)
			.map((e, i)=>{
				if (i > 0) return e.replace(/>|\/>/, "/>");
				else return e 
			}).join("<br")
			.split(/<img/)
			.map((e, i)=>{
				if (i > 0) return e.replace(/>|\/>/, "/>");
				else return e 
			}).join("<img")
			.split(/<input/)
			.map((e, i)=>{
				if (i > 0) return e.replace(/>|\/>/, "/>");
				else return e 
			}).join("<input")
			.split("<component ").map((e, i) => {
				if (i > 0) {
					let name = e.match(/name=('|")\w*/)[0].slice(6);
					let splitted = e.split("</component>");
					let tag = splitted[0].split(/\r\n|\n|\r/)[0];
					return tag.replace(/name=('|")\w*('|")/, name).replace(">", "/>") + splitted[1];
				} 
				else return e
			})
		.join("<");

			return html
	}
	setPrerenderLogical(){
		this.loopsMapped = false;
		let loops = this.loopsState.map(e=>{
			return `var loop_${e.id} = this.state.${e.state}.map(${e.value}=>\n\t\t\t(${this.setReactFilterHTMLState(e.content)})\n\t\t);\n\t\t`
		});
		this.condMapped = false;
		let cond = this.condStates.map(e=>{
			return `var cond_${e.id};\n\t\tif(this.state.${e.cond}) {\n\t\t\tcond_${e.id} = ${this.setReactFilterHTMLState(e.if)}\n\t\t} ${e.else ? `else {\n\t\t\tcond_${e.id} = ${this.setReactFilterHTMLState(e.else)}\n\t\t}\n\t\t`:""}`
		});
		this.condStates = [];
		this.loopsState = [];
		return `${loops ? loops.join(""):""}${cond ? cond.join("") : ""}${this.prerenderComputed.length > 0 ? this.prerenderComputed.join(""):""}`;
	}
}

module.exports = new ReactStateManagement();
