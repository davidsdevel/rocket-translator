const StateManagement = require("../test/StateManagement").default;

var state;

/**
 * Test Without Value 
 */

const stateWithoutValue = new StateManagement();
state = "<h1>Hello {name - state}!</h1>";
stateWithoutValue.getHTMLString(state);

test("test get state without value from template", ()=>{
    expect(stateWithoutValue.states).toContain("name");
});

/**
 * Test With String Value
 */
const stateStringManager = new StateManagement();
state = "<h1>Hello {name - state - 'world'}!</h1>";
stateStringManager.getHTMLString(state);

test("test get state and string value from template", ()=>{
    expect(stateStringManager.states).toEqual([{key:"name",value:"world"}]);
});

const stateNumberManager = new StateManagement();
state = "<h1>Hello I have {yearlsOld - state - 19}!</h1>";
stateNumberManager.getHTMLString(state);

test("test get state and Number value from template", ()=>{
    expect(stateNumberManager.states).toEqual([{key:"yearlsOld",value:19}]);
});


const stateBooleanManager = new StateManagement();
state = "<h1>{Alone - state - true}!</h1>";
stateBooleanManager.getHTMLString(state);

test("test get state and string boolean from template", ()=>{
    expect(stateBooleanManager.states).toEqual([{key:"Alone",value:true}]);
});
