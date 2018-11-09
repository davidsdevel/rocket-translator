# RocketJS

Translate HTML code to Vue or React.

## Instalation

To install simply:
Clone the repository and install dependencies.

```sh 
git clone https://github.com/David-ImpulseWD/RocketJS.git

cd RocketJS

npm install 
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
node index.js [mode] path/to/file.html [output folder]
```

The **mode** may be `-v` to Vue or `-r` to React.

The **output folder** is optional, if this is not defined will create a folder named **dist**.

The **mode** also may be `-s`, in this case, the path will be the port number, or by default will be: **8080**.

## Guide

* [States Simple](#states-simple)
* [Props](#props)
* [Computed](#computed)
* [Methods](#methods)

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

To know more about states, and Javascript Management. You can see [Javascript Management](#js-management) section. 

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

A **Computed** method is a function that return a `String` or `Number` value, and this is render on the template. And to declare a computed method, simply we can set the computed method name and the type: **computed**.

```html
<div>{computedName - computed}</div>
```




### Methods <a name="methods"></a>

### Components <a name="components"></a>

### State Watchers <a name="watchers"></a>

### Inputs Handler

### Conditionals

### Loops

### Bind Attributes

### Styles

### JS Management

### HTML Syntax


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
- [ ] Conditionals
- [ ] Loops
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