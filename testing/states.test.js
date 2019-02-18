const StateManagement = require("../Lib/core/StateManagement/StateManagement.js");

var state;
var stateManager;
beforeEach(() => {
    stateManager = new StateManagement();
});

afterEach(() => {
    stateManager = undefined;
});

/**
 * Test Without Value 
 */
state = "<h1>Hello {name - state}!</h1>";
stateManager.getHTMLString(state);

test("test get state without value from template", ()=>{
    expect(stateManager.states).toContain("name");
});

/**
 * Test With String Value
 */
state = "<h1>Hello {name - state - 'world'}!</h1>";
stateManager.getHTMLString(state);

test("test get state and string value from template", ()=>{
    expect(stateManager.states).toEqual([{key:"name",value:"world"}]);
});

state = "<h1>Hello {years - state - 19}!</h1>";
stateManager.getHTMLString(state);

test("test get state and Number value from template", ()=>{
    expect(stateManager.states).toEqual([{key:"years",value:19}]);
});


state = "<h1>{Alone - state - true}!</h1>";
stateManager.getHTMLString(state);

test("test get state and string boolean from template", ()=>{
    expect(stateManager.states).toEqual([{key:"Alone",value:true}]);
});
