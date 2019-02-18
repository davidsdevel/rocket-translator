let StateManagement = require("../Lib/core/StateManagement/StateManagement.js");

let component = `<div>
    <MyComponent/>
</div>`;
let componentManager = new StateManagement();

componentManager.getHTMLString(component);

test("test get state from template", ()=>{
    expect(componentManager.components).toContain("MyComponent");
});
