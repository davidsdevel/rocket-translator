# RocketJS Server
RocketJS is a HTML translator that with a few changes, you can use the same code to convert into React or Vue.
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
or this
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
###How to Use
```bash
`Use: node index.js [command] [input-file] [output-folder]
	node index.js -s [port]

Commands:
    Compile to react:    --react | -r
    Compile to vue:      --vue   | -v
    Help:                --help  | -h`
```