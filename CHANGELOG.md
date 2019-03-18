# Version 2
## Added Angular Support!!!

This was be the most awaited feature in the project. We start with Angular 7, and in future versions we will add previous angular versions. Remember help with issues and pull request.

## 2.0.0

### Some Fix

Fixed the State assignament on react and all states that has be changed, will be filtered as `this.setState`;

Fixed Quotes on Vue Filter.

Fixed the "Missing Var" Error.

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
The `for` tag now will be a `ul` tag.

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
