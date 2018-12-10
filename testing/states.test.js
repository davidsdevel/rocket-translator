let StateManagement = require("../Lib/core/StateManagement/StateManagement.js");

let state = "<h1>Hello {name - state}!</h1>";
let managerState = new StateManagement();

managerState.getHTMLString(state);

test("test get state from template", ()=>{
    expect(managerState.states).toContain("name");
});

let stateWithValue = "<h1>Hello {name - state - 'world'}!</h1>";

let manager = new StateManagement();

manager.getHTMLString(stateWithValue);

test("test get state and value from value", ()=>{
    expect(manager.states).toEqual([{key:"name",value:"world"}]);
});