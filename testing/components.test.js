let StateManagement = require("../test/StateManagement").default;

let component = `<div>
    <MyComponent/>
</div>`;
let componentManager = new StateManagement();

componentManager.getHTMLString(component);

test("test get state from template", ()=>{
    expect(componentManager.components).toContain("MyComponent");
});
