# RocketJS

Translate HTML code to Vue or React

## Instalation

To install simply:
Clone the repository and install dependencies

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

To use, simpy create a HTML file, with the code to translate, and run

```sh
node index.js [mode] path/to/file.html [output folder]
```

The "mode" may be `-v` to Vue or `-r` to React.

The "output folder" is optional, if this is not defined will create a folder named "dist".

The "mode" also may be `-s`, in this case, the path will be the port number, or by default will be: 8080.

## Guide

* [States Simple](#states-simple)
* [Props](#props)
* [Computed](#computed)
* [Methods](#methods)

### States Simple <a name="states-simple"></a>

A **State** in a Vue or React component, are a way to set data the affect the view, and when this change, the component re-render the View.

To get values into the HTML, we would declare into `{}`. And to the declare a state, we have 3 modes to set it: **Simple**, **Declared**, **With Value**.

The **Simple** mode, is write only the state name into the template.

Example:

```html
<div>{myState}</div>
```

This will declare a empty state named **name**.

In the **Declared** mode, we set the state name, and the type, in this case **state**.

Example:

```html
<div>{myState - state}</div>
```

This is the same that the **Simple** mode, only that with this, we know that this **word** is a state.

In the **With Value** mode, we declare the state name, the type \(**state**\) and the value to this state.

Example:

```html
<div>{stateName - state - "Some Value"}</div>
```
The value may be `String`, `Number`, `Boolean`,`Array` and  `Object`.

And in the firts two case, we obtain the next component.

On Vue:

```js
data(){
	return {
		myState:""
	}
}
```
And on React we obtain:

```js
this.state = {
	myState:""
}
```

In the last case we obtain. On Vue:

```js
data(){
	return {
		stateName:"Some Value"
	}
}
```

And on React:

```js
this.state = {
	stateName:"Some Value"
}
```

To know more about states, and Javascript Management. You can see [Javascript Management](#JS Management) section. 

### Props <a name="props"></a>

The **props** in a component, are data that a parent \(container\) component pass trough this.

And like the state, we may declare a prop with this format `{propName - prop}`.

Example:
```html
<div>The next data is passed form the parent component: {parentData - prop}</div>
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