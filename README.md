# Rocket Translator [![npm version](https://badge.fury.io/js/rocket-translator.svg)](https://badge.fury.io/js/rocket-translator)

Translate HTML code to Vue, React or Angular.

## Instalation

To install simply: Use npm

```sh 
npm i -g rocket-translator
```
or Yarn

```sh
yarn global add rocket-translator
```

## Getting Started

### Basic

You can convert this:

```xml
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

```xml
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

Or this:

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'test-root',
    template:`<div>Hello {{name}}!</div>`
})

export class Test {
    name = "World";   
}
```

### How to Use

To use, simpy create a HTML file, with the code to translate, and run:

```sh
rocket [mode] path/to/file.html [output folder]
```

The **mode** may be `vue`, `react` or `angular`.

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
* [CLI](#cli)

### States Simple <a name="states-simple"></a>

A **State** in a Vue or React component, are a way to set data that affect the view, and when this changes, the component re-render the view.

To get values from the HTML, we must declare into `{}`. And to the declare a state, we have 2 modes to set it: **Simple**, **With Value**.

The **Simple** mode, is declared writing only the state name into the template and writing the type: **state**.

Example:

```xml
<div>{myState - state}</div>
```

In the **With Value** mode, is declared when, we write the state name, the type: **state** and the value for this state.

Example:

```xml
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
In React we obtain:

```js
this.state = {
    myState:""
}
```
And in Angular: 

```ts
export class Test {
    myState = "";   
}
```
In the **With value** case we obtain. In Vue:

```js
data() {
    return {
        stateName:"Some Value"
    }
}
```

On React:

```js
this.state = {
    stateName:"Some Value"
}
```

And on Angular:

```ts
export class Test {
    stateName = "Some Value";   
}
```

Since version `2.0.0` you can add a prop in a bind attribute with the same format that in the bars expression `stateName - state`;

Example: 
```xml
<div>
    <span :class="className - state">Hello World!!!</span>
</div>
<script>
    function setInitialState() {
        return {
            className: "foo"
        }
    }
</script>
```

Or you can add the value next the `state` word.

```xml
<div>
    <span :class="className - state - 'foo'">Hello World!!!</span>
</div>
```

To know more about states and JavaScript Management. You can see [JavaScript Management](#js-management) section.

### Props <a name="props"></a>

The **props** in a component, are data that a parent \(**container**\) component pass to a child component.

And like the **state**, we may declare a prop with this format `{propName - prop}`.

Example:

```xml
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

And on Angular, Import `Input` from `"@angular/core"` and declare as prop.

```ts
import { Component, Input} from '@angular/core';

...

export class Test {
    @Input() parentData : string;   
}
```

Since version `2.0.0` you can add a prop in a bind attribute with the same format that in the bars expression `propName - prop`;

Example: 
```xml
<span :class="externalState - prop">Hello World</span>
```

### Computed <a name="computed"></a>

A **Computed** propierty is a function that return a `String` or `Number` value, and this is render on the template. And to declare a computed propierty, simply we can set the computed propierty name and the type: **computed** and create the function to execute that match with the computed name.

```xml
<div>{hello - computed}</div>
```
```js
function hello() {
    return "Hello World";
}
```
This will create a computed properties that returns a **Hello World**.

Example:
```xml
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

```xml
<button onclick="hello()">Say Hello</button>
<script>
function hello() {
    alert("Hello World");
}
</script>
```

Since Version 2.1.0 you can use `async` funtions.

```xml
<div>
    <div>{data - state}</div>
    <button onclick="fetchData()">Fetch Data</button>
</div>
<script>
    function setInitialState() {
        return {
            data: ""
        }
    }
    async function fetchData() {
        try {
            const req = await fetch("http://someurl/data");
            const fetched = await req.json();
            data = fetched;
        }
        catch(err) {
            console.log(err);
        }
    }
</script>
``` 

### Components \(**Partial**\)<a name="components"></a>

To import a **component** inside the main component. Only add the tag with the component syntax.

```xml
<MyComponent />
```
And to add a attr with a state value add `:` on the attr front.

```xml
<MyComponent :my-bind-attr="stateName" />
```

To write the component content, add a `component` tag with the **component content**. And add the attr `component-name` with the **component name**. And others attrs can be passed to the component.

```xml
<component component-name="HelloWorldComponent" name="World">
    <div>
        <h1>Hello {name - prop}!</h1>
    </div>
</component>
```

### State Watchers <a name="watchers"></a>

To define a **State Watcher** you must create the function `setStateWatchers` this function must return all the states watchers.

```js
function setStateWatchers() {
    return {
        state(e) {
            //Handle State
        },
        anotherState: function(e) {
            //Handle Another State
        }
    }
}
```

Also you can define as a `var`, `let` or `const`.

```js
const setStateWatchers = () => {
    return {
        //Watchers
    }
}
```

### Inputs Handler <a name="inputs"></a>

To **handle** a input, you must add the attr `name` on the input tag, and the value will be take to add a state with that name.

```xml
<input type="text" name="username" />
```

On **Vue** will render.

```xml
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
    }
}
```

Do not implement on Angular. We will add this features in futures versions.

### Conditionals <a name="conditionals"></a>

To declare a **conditional**, add the `if` tag, with the `cond` attr, where `cond` is the condition to evaluate.

Example:

```xml
<if cond="auth">
    <span>Congratulations! you are Sign in this platform</span>
</if>
```

And you can set it with an `else` tag.
```xml
<if cond="password.length < 6">
    <span>Password must have more of 6 characters</span>
</if>
<else>
    <span>Password is very strong</span>
</else>
```
Since version **2.0.0** we add the `else-if` tag. Like the `if` tag, this take the attr `cond` with the condition.

```xml
<if cond="age < 18">
    <span>Too Young</span>
</if>
<else-if cond="age > 30">
    <span>Too Old</span>
</else-if>
```

And now you can add the `tag` attribute to set conditional **tag name**.


Example: 
```xml
<div>
    <if cond="auth === true" tag="span">
        I must buy {item}
    </if>
</div>
```
The `for` tag now will be a `li` tag.

**Vue**
```xml
<ul>
    <li v-for="item in buyList">
        I must buy {{item}}
    </li>
</ul>
```

**Angular**
```xml
<ul>
    <li *ngFor="let item of buyList">
        I must buy {{item}}
    </li>
</ul>
```

On **React** put the content inside the **tag**.

```jsx
var loop_0000 = this.state.buyList.map(item => 
        (<li>{item}</li>)
    );
```

The default tag on **Vue** is the `template` tag.
On **React** don't have default tag. Put the content without tag.
And on **Angular** the default tag is the `div` tag.

### List Render <a name="loops"></a>

Like the conditionals, add a loop is't very easy, add a `for` tag, with the `val` attr.

```xml
<for val="varName in stateName">
    <span>{varName}</span>
</for>
```

And since the version `2.0.0` you can add the `tag` attribute to define the tag to put the loop content.

Example: 
```xml
<ul>
    <for val="item in buyList" tag="li">
        I must buy {item}
    </for>
</ul>
```
The `for` tag now will be a `li` tag.

**Vue**
```xml
<ul>
    <li v-for="item in buyList">
        I must buy {{item}}
    </li>
</ul>
```

**Angular**
```xml
<ul>
    <li *ngFor="let item of buyList">
        I must buy {{item}}
    </li>
</ul>
```

On **React** put the content inside the **tag**.

```jsx
var loop_0000 = this.state.buyList.map(item => 
        (<li>{item}</li>)
    );
```

The default tag on **Vue** is the `template` tag.
On **React** don't have default tag. Put the content without tag.
And on **Angular** the default tag is the `div` tag.

### Bind Attributes <a name="binds"></a>

A **Bind Attribute** is a form to set a state value on a tag attribute. And the syntax is like on Vue.

If you want add a default value you must add a `-` followed of the type.

```xml
<button :class="classButton - state">Do Click</button>
```
The type can be `state` or `prop`.

And with the type `state` you can add the `String` value next `state` word.

```xml
<button :class="classButton - state - 'bar'">Do Click</button>
```
### JavaScript Management <a name="js-management"></a>

To the JavaScript Management, we add a few of keywords to help with the code imports. We must follow some rules to the correctly function of the translator.

To include JavaScript on the template, add a `script` tag with the JavaScript code to translate. Or you can add the line `#js path/to/js.js` to import a external file.

#### Lifecycles
Since version `2.0.0` we add supports for framework **lifecycle**; and like methods and computed, all lifecycles will be filtered.

We add 8 lifecycles to define the final component.

* **setInitialState**
* **setStateWatchers**
* **beforeMount**
* **mounted**
* **beforeUpdate**
* **updated**
* **beforeUnmount**
* **unmounted**

##### Set Initial States

`setInitialState` have the same function that the `state` keyword in previous versions, this define **states** that will not be rendered on template.

Example:

```xml
<div>
    <span>Hi I Am: {fullName - computed}</span>
</div>
<script>
    function setInitialState() {
        return {
            name: "Foo",
            lastName: "Bar"
        }
    }
    function fullName() {
        return `${name} ${lastName}`;
    }
</script>
```

##### Set State Watchers

`setStateWatchers` have the same function that the `watch` keyword in previous versions, this define all the states **watchers**.

Example:

```xml
<div>
    <span>You have do {clicks - state - 0} clicks</span>
    <button onclick="countClick()">Do Click</button>
</div>
<script>
    function setStateWatchers() {
        return {
            clicks(clicksNumber) {
                if (clicksNumber > 10) {
                    alert("You do more than 10 clicks");
                }
            }
        }
    }
    function countClick() {
        clicks++;
    }
</script>
```

#### Functions

The **Functions** are to change the method and computed properties execution. If the method or computed name match with the function name, this will be that method or computed.

```xml
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
function setInitialState() {
    return {
        name: "Hello",
        lastName: "World"
    }
}

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

Framework Declarative Syntax: `{ name }`

State without value: `{stateName - state}`

State With Value: `{stateName - state - value}`
The `value` can be type: `String`, `Number`, `Boolean`, `Array`, `Object`, `null`, `undefined`, `NaN` or `Infinity`.

Prop: `{propName - prop}`

Computed Propierty: `{computedName - computed}`

#### Import Tag

To import a JavaScript external file, we use: `#js path/to/js.js`.

**Note**: We want add **CSS** Support.

#### Bind Attributes

To execute JavaScript syntax or assign a state or prop value on an HTML attribute, we use `:attrName="Js or State"`.

#### Conditionals And Loops Tags

We add three HTML tags to assign **Conditionals** and **Loops**. `if`, `else-if`, `else` and `for`.

```xml
<if cond="condToEvaluate">
    <span>If Content</span>
</if>
<else-if cond="condToEvaluate">
    <span>Else If Content</span>
</else-if>
<else>
    <span>Else Content</span>
</else>
<for val="varName in stateName">
    <span>For Content</span>
</for>
```
#### Component Tag

We add this tag to declare a **custom** component inside the **Main Component**

```xml
<component component-name="ComponentName">
    <span>Component Content</span>
</component>
```

### CLI <a name="cli"></a>

CLI use is simple: `rocket [mode] <input-file> <output-folder>`

**mode** will be the target framework: _React_, _Vue_ or _Angular_.
**input-file** will be the HTML component filepath.
**output-folder** is optional. Will be the folder path. If is not defined, create a folder named `dist`.

#### Options

##### --ignore-input-name

Option `--ignore-input-name`, is used to evite that the filter, parse the name attribute on `input`, `select` or `textarea` tags.

See a React Example
Without `--ignore-input-name`:

```jsx
render() {
    return (
        <div>
            <input onChange={this.inputHandler} type="text" name="username"/>
            <input onChange={this.inputHandler} type="password" name="password"/>
        </div>
    )
}
```

With `--ignore-input-name`:

```jsx
render() {
    return (
        <div>
            <input type="text" name="username"/>
            <input type="password" name="password"/>
        </div>
    )
}
```
##### --jsx

Option `--jsx` is used to compile Vue and React as JSX, without this, Vue will be compiled as HTML and React with `React.createElement`

##### --allow-ssr

Option `--allow-ssr` compile frameworks as Server Side Render-Frameworks, **Next** to React, **Nuxt** to Vue. With this `a` tags will be converted on `Link` or `nuxt-link` and can add, `getInitialProps` and `asyncData` methods.

**Note**: Angular SSR are not currently supported

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
- [x] Nested Conditionals 
- [x] Loops
- [x] Nested Loops
- [ ] Inner HTML
- [x] Lifecycles
- [ ] React without JSX
- [ ] React without ES6
- [ ] Vue Standalone
- [x] Vue With JSX
- [ ] Next Framework
- [x] Angular 7 Support
- [ ] Previous Angular Versions
- [ ] Compiler Directives

**Note:** If you see that some feature is missing, you can open a pull request or write an issue, and tell what feature is missing.

## Contributing

To contribute you can open a **pull request** with the changes to improve in the code, or open a new **issue**.
