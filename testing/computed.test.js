let StateManagement = require("../src/core/StateManagement");

let methodsWithInput = "<h1>Hello {world - computed}</h1>";
let manager = new StateManagement();

manager.getHTMLString(methodsWithInput);

test("Test get Computed from input and default content", ()=>{
    expect(manager.computed).toEqual([{name:"world",content:null}]);
});
