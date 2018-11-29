# RocketJS

Translate HTML code to Vue or React.

## Instalation

To install simply:
Clone the repository and install dependencies.

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
	super();
	this.state = {
    	name:"World"
    };
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
* [Styles](#styles)
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

To know more about states, and Javascript Management. You can see [JavaScript Management](#js-management) section. 

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
And in React, pass the props trought the **Component Constructor** and auto declares the props.

```js
constructor(props){
	super(props);
}
render(){
	return(
		<div>{this.props.parentData}</div>
	)
}
```

### Computed <a name="computed"></a>

A **Computed** propierty is a function that return a `String` or `Number` value, and this is render on the template. And to declare a computed propierty, simply we can set the computed propierty name and the type: **computed**.

```html
<div>{computedName - computed}</div>
```

This will create a computed propierties that returns a **Hello World**. And to set your own computed propierty, you must add a **script** tag and create a function named like the computed propierty.

```html
<div>Hi I Am {fullName - computed}!</div>
<script>
function fullName() {
	var name = "Foo";
	var lastName = "Bar";

	return `${name} ${lastName}`;
}
</script>
```
Too know more about Javascript Management go to [JavaScript Management](#js-management) section.

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

Para declarar un State Watcher añadan la palabra reservada `watch` seguido del nombre del estado igual a la funcion a ejecutar cuando cambie el estate.

```js
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

### Styles <a name="styles"></a>

### JavaScript Management <a name="js-management"></a>

### HTML Syntax <a name="syntax"></a>


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
- [x] Javscript Management \(**partial**\)
- [x] Conditionals
- [x] Loops
- [ ] Inner HTML 
- [ ] Lifecycles
- [ ] React without JSX
- [ ] React without ES6
- [ ] Vue Web Browser
- [ ] Next Framework
- [ ] Angular Support

**Note:** if you see that some feature is missing, you can write an issue, and tell what feature is missing.

## Contributing

To contribute you can Join to our [Slack](https://rocketjs.slack.com) channel for more info. \(**Info in Spanish**\)

Coming soon we add an english thread.
