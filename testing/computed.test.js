let StateManagement = require("../Lib/core/StateManagement/StateManagement.js");

let methodsWithInput = "<h1>Hello {world - computed}</h1>";
let manager = new StateManagement();

manager.getHTMLString(methodsWithInput);

test("Test get Computed from input and default content", ()=>{
    expect(manager.computed).toEqual([{name:"world",content:"{\n\t\t\treturn 'Hello World'\n\t\t}"}]);
});
