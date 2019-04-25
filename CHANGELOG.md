# Version 2

## 2.1.0

### Some Fixes

Fixes on React HTML Filter

### Updated Help Message on CLI

Reformated Help Message

### Optimized with Webpack

Rocket Translator, now will be compiled with webpack to improve the performance, size, and speed. And minimize dependencies.

### Fixed Same State Assignament on Javascript and HTML.

If a state is defined on Javascript and on HTML is defined without value, this don't assign the value.

```html
<div>
    <span>Hello {name - state}</span>
</div>
<script>
    function setInitialState() {
        return {
            name: "World"
        }
    }
</script>
```
Final State.
```js
{
    name: ""
}
```

Now if we define the same state on JS and HTML, is both have value, show an Error, if in HTML don't have a value, the value will be the defined on JS.

## 2.0.3

### Updated CLI Help Message

Updated help message that was show `[vue or react]` and was changed with `[mode]`.


## 2.0.2

## Fix CLI Error

Fixed Error: Unable to start the CLI when we execute `rocket` command.

## 2.0.1

### Fix "exports." on internal function vars.

When the take the data, create a temp file that contains the data setted in the html script tag. And replace the `var`, `let` and `const` with `exports.` that the module can export these vars.

### Added "tag" for "if", "else-if" and "else" tags

Now you can add the `tag` attribute to set the tag to put the conditional content.

## 2.0.0

## Added Angular Support!!!

This was be the most awaited feature in the project. We start with Angular 7, and in future versions we will add previous angular versions. Remember help with issues and pull request.

### Some Fix

Fixed the State assignament on react and all states that has be changed, will be filtered as `this.setState`;

Fixed Quotes on Vue Filter.

Fixed the "Missing Var" Error.

Fixed the bind attribute value assignament.

### Added the "tag" attribute for the "for" tag
Now you can add the `tag` attribute to set the tag to put the loop content.

Example: 
```html
<ul>
    <for val="item in buyList" tag="li">
        I must buy {item}
    </for>
</ul>
```
The `for` tag now will be a `li` tag.

```html
<ul>
    <li v-for="item in buyList">
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

### Added Else If Support

Now you can use the `else-if` tag, like the `if` tag, this have must have the `cond` attribute to define the condition.

```html 
<if cond="condition">
    <span>Content</span>
</if>
<else-if cond="secondCondition">
    <span>Content</span>
</else-if>
```

### Define Functions Mode

Now you can define all functions, (`methods`, `computed`, `lifecycles`), as a **function** or as a **var**.

Example:

```js
function sayHello() {
    alert("Hello World");
}
//Is't the same as
const sayHello = () => {
    alert("Hello World");
}
```

### Lifecycles

Was added a lifecycle supports for all components, we add 6 framework lifecycle and 2 that help to define states and watchers.

* **setInitialState**
* **setStateWatchers**
* **beforeMount**
* **mounted**
* **beforeUpdate**
* **updated**
* **beforeUnmount**
* **unmounted**

To set it create a function named with the lifecycle name, and this will be setted on the component.

Example:

```js
function setInitialState() {
    return {
        name:""
    }
}
function mounted() {
    name = "Hello World";
}
```


### Keywords
We change the **state keyword** with the function `setInitialState`, that must return all component's states

On version 1, we define a state like this:

```js 
state name = "Foo";
state lastName = "Bar";
```

Since version 2, will be defined:

```js
function setInitialState() {
    return {
        name:"Foo",
        lastName:"Bar"
    }
}
```

And we change the **watch keyword** with the function `setStateWatchers`, that must return the watchers.

On version 1, we define a state like this:

```js 
watch clicks = e => {
    if (e > 10) {
        alert("You do more than 10 clicks");
    }
}
```

Since version 2, will be defined:

```js
function setStateWatchers() {
    return {
        clicks(e) {
            if (e > 10) {
                alert("You do more than 10 clicks");
            }
        }
    }
}
```
