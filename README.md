# RocketJS [![npm version](https://badge.fury.io/js/rocket-translator.svg)](https://badge.fury.io/js/rocket-translator)

Translate HTML code to Vue or React.

## Instalation

To install simply: Use npm

```sh 
npm i -g rocket-translator
```

## Getting Started

### Basic

You can convert this:

```html
<div>Hello {name - state - "World"}!</div>
```
into this:

```jsx
import React, {Component} from "react";

class MyComponent extends Component {
	constructor() {
		super();
		this.state = {
    			name:"World"
    		};
	}
    render(){
    	return(
        	<div>Hello {this.state.name}!</div>
		)
    }
}
export default MyComponent;
```
or this:

```html
<template>
	<div>Hello {{name}}!</div>
</template>
<script>
	export default {
		name:"MyComponent",
		data(){
			return {
            	name:"World"
			}
		}
    }
</script>
```

### How to Use

To use, simpy create a HTML file, with the code to translate, and run:

```sh
rocket [mode] path/to/file.html [output folder]
```

The **mode** may be `-v` to Vue or `-r` to React.

The **output folder** is optional, if this is not defined will create a folder named **dist**.

## Guide

* [States Simple](#states-simple)
* [Props](#props)
* [Computed](#computed)
* [Methods](#methods)
* [Components](#components)
* [Watchers](#watchers)
* [Inputs Handler](#inputs)
* [Conditionals](#conditionals)
* [List Render](#loops)
* [Bind Attributes](#binds)
* [JavaScript Management](#js-management)
* [HTML Syntax](#syntax)

### States Simple <a name="states-simple"></a>

A **State** in a Vue or React component, are a way to set data that affect the view, and when this changes, the component re-render the view.

To get values from the HTML, we must declare into `{}`. And to the declare a state, we have 2 modes to set it: **Simple**, **With Value**.

The **Simple** mode, is declared writing only the state name into the template and writing the type: **state**.

Example:

```html
<div>{myState - state}</div>
```

In the **With Value** mode, is declared when, we write the state name, the type: **state** and the value for this state.

Example:

```html
<div>{stateName - state - "Some Value"}</div>
```
The **value** may be `String`, `Number`, `Boolean`,`Array` and  `Object`.

And in the **simple** case, we obtain the next component state.

In Vue:

```js
data(){
	return {
		myState:""
	}
}
```
And in React we obtain:

```js
this.state = {
	myState:""
}
```

In the **With value** case we obtain. In Vue:

```js
data(){
	return {
		stateName:"Some Value"
	}
}
```

And in React:

```js
this.state = {
	stateName:"Some Value"
}
```

To know more about states, and JavaScript Management. You can see [JavaScript Management](#js-management) section. 

### Props <a name="props"></a>

The **props** in a component, are data that a parent \(**container**\) component pass to a child component.

And like the **state**, we may declare a prop with this format `{propName - prop}`.

Example:

```html
<div>{parentData - prop}</div>
```

And declaring a prop, the final template will render, in Vue:

```js
props:{
	parentData:{
		type:String,
		required:true,
		default:"Hello World"
	}
}
```
And in React, auto declares the prop.

```js
return(
	<div>{this.props.parentData}</div>
)
```

### Computed <a name="computed"></a>

A **Computed** propierty is a function that return a `String` or `Number` value, and this is render on the template. And to declare a computed propierty, simply we can set the computed propierty name and the type: **computed**.

```html
<div>{computedName - computed}</div>
```

This will create a computed properties that returns a **Hello World**. And to set your own computed propierty, you must add a **script** tag and create a function named like the computed propierty.

```html
<div>Hi I Am {fullName - computed}!</div>
<script>
function fullName() {
	var name = "Foo";
	var lastName = "Bar";

	return name + " " + lastName;
}
</script>
```
Too know more about JavaScript Management go to [JavaScript Management](#js-management) section.

### Methods <a name="methods"></a>

A **Method** is a function executed by an event on the final render or by the render. Is not necesary declare the method only set the event into the tag.

```html
<button onclick="hello()">Say Hello</button>
<script>
function hello() {
	alert("Hello World");
}
</script>
```


### Components \(**Partial**\)<a name="components"></a>

To import a **component** inside the main component. Only add the tag with the component syntax.

```html
<MyComponent />
```
And to add a attr with a state value add `:` on the attr front.

```html
<MyComponent :my-bind-attr="stateName" />
```  

### State Watchers <a name="watchers"></a>

To declare a **State Watcher** you must add the keyword `watch` followed by the state name to watch equal to function to execute when the state changes.

```js
watch stateName = function(e) {
	//Handle State
}
//Or with ES6
watch stateName = e => {
	//Handle State
}
```

### Inputs Handler <a name="inputs"></a>

To **handle** a input, you must add the attr `name` on the input tag, and the value will be take to add a state with that name.

```html
<input type="text" name="username" />
```

On **Vue** will render.

```html
<template>
	<input type="text" v-model="username" name="username"/>
</template>
<script>
	export default {
		name:"MyComponent",
		data() {
			return {
				username:""
			}
		}
	}
</script>
```

On React.

```jsx
import React, {Component} from "react";

class MyComponent extends Component {
	constructor() {
		super();
		this.state = {
			username:""
		}
	}
	inputHandler({target}){
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value
		})
	}`
}
```

### Conditionals <a name="conditionals"></a>

To declare a **conditional**, add the `if` tag, with the `cond` attr, where `cond` is the condition to evaluate.

Example:

```html
<if cond="auth">
	<span>Congratulations! you are Sign in this platform</span>
</if>
```

And you can set it with an `else` tag.
```html
<if cond="password.length < 6">
	<span>Password must have more of 6 characters</span>
</if>
<else>
	<span>Password is very strong</span>
</else>
```

### List Render <a name="loops"></a>
Like the conditionals, add a loop is't very easy, add a `for` tag, with the `val` attr.

```html
<for val="varName in stateName">
	<span>{varName}</span>
</for>
```

### Bind Attributes <a name="binds"></a>
A **Bind Attribute** is a form to set a state value on a tag attribute. And the syntax is like on Vue.

```html
<span :style="stateName">Hello World</span>
```

If you want add a default value you must add a `-` followed of the value.

```html
<button :class="classButton - 'value'"></button>
```

### JavaScript Management <a name="js-management"></a>

To the JavaScript Management, we add a few of keywords to help with the code imports. We must follow some rules to the correctly function of the translator.

To include JavaScript on the template, add a `script` tag with the JavaScript code to translate. Or you can add the line `#js path/to/js.js` to import a external file.

#### Keywords

##### State

The keyword `state` is used to declare a state from JavaScript. Using the next format: `state stateName = stateValue`.

The **State Value** can be type: `String`, `Number`, `Boolean`, `Array` or `Object`.

##### Watch

The keyword `watch` is used to assign a **Watcher** to a state or prop. Assigning as value the function to execute with the param that the function get.

```js
watch stateOrProp = function(e) {
	console.log(e);
}

// Or use ES6

watch stateOrProp = e => {
	console.log(e);
}
```

#### Functions

The **Functions** are to change the method and computed properties execution. If the method or computed name match with the function name, this will be that method or computed.

```html
<div>
	<span>This is my {computedPropierty - computed} propierty</span>
	<button onclick="sayHello()">Say Hello</button>
</div>
<script>
	function computedPropierty() {
		return "Computed"
	}

	function sayHello() {
		alert("Hello World");
	}
</script>
``` 

#### Filter

The **JavaScript Filter** is structured to filter the states and props. If into the code we have a function that contain a var with the state or prop name, this will be replaced automaticaly. Is not necesary declare like a state.

```js
state name = "Hello";
state lastName = "World";

function sayHello() {
	alert(name + " " + lastName);
	/* 
		will return on React: alert(this.state.name + " " + this.state.lastName);
		and on Vue: alert(this.name + " " + this.lastName);
	*/
} 
```
**Note**: You must evite use vars with state names, until we fix this.

### HTML Syntax <a name="syntax"></a>

Like on JavaScript, on HTML we have a specific **syntax**, that we must follow to the correctly translator function.

#### Bars Declaration

The most used is the **bars declaration** `{}`, this is used to assign a state, prop, computed or the out framework syntax.

Framework Declarative Syntax: `{ unsignedValue }`

State without value: `{stateName - state}`

State With Value: `{stateName - state - value}`
The `value` can be type: `String`, `Number`, `Boolean`, `Array` and `Object`.

Prop: `{propName - prop}`

Computed Propierty: `{computedName - computed}`

#### Import Tag

To import a JavaScript external file, we use: `#js path/to/js.js`.

**Note**: We want add **CSS** Support.

#### Bind Attributes

To execute JavaScript syntax or assign a state or prop value on an HTML attribute, we use `:attrName="Js or State"`.

#### Conditionals And Loops Tags

We add three HTML tags to assign **Conditionals** and **Loops**. `if`, `else` and `for`.

```html
<if cond="condToEvaluate">
	<span>If Content</span>
</if>
<else>
	<span>Else Content</span>
</else>
<for val="varName in stateName">
	<span>For Content</span>
</for>
```

## To Do

### Features Support

- [x] States
- [x] Methods
- [x] Computed
- [x] Props
- [x] States Watchers
- [x] Components
- [x] Bind States, Props, JS Expresions
- [x] Input Handlers
- [x] JavaScript Management \(**partial**\)
- [x] Conditionals
- [ ] Nested Conditionals 
- [x] Loops
- [ ] Nested Loops
- [ ] Inner HTML 
- [ ] Lifecycles
- [ ] React without JSX
- [ ] React without ES6
- [ ] Vue Standalone
- [ ] Next Framework
- [ ] Angular Support

**Note:** If you see that some feature is missing, you can open a pull request or write an issue, and tell what feature is missing.

## Contributing

To contribute you can Join to our [Slack](https://rocketjs.slack.com) channel for more info. \(**Info in Spanish**\)

Coming soon we add an english thread.
