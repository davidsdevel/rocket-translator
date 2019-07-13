let StateManagement = require("../src/core/StateManagement");

let methodsWithInput = "<button onclick='helloWorld()'>Click Me</button>";
let manager = new StateManagement();

manager.getHTMLString(methodsWithInput);

test("Test get methods from input and default content", ()=>{
    expect(manager.methods).toEqual([{name:"helloWorld", content:null}]);
});
