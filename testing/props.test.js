let StateManagement = require("../Lib/core/StateManagement/StateManagement.js");

let prop = "<h1>Hello {name - prop}!</h1>";
let managerState = new StateManagement();

managerState.getHTMLString(prop);

test("test get prop from template", ()=>{
    expect(managerState.props).toContain("name");
});