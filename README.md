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
```bash
node index.js
```