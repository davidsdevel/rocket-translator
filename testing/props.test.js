const StateManagement = require("../src/core/StateManagement");

const propInBars = "<h1>Hello {name - prop}!</h1>";
const propInBarManager = new StateManagement();

propInBarManager.getHTMLString(propInBars);

test("test get prop from bars", ()=>{
    expect(propInBarManager.props).toContain("name");
});

const propInBindAttributes = "<h1 :class='color - prop'>Hello World!</h1>";
const propInBindAttributesManager = new StateManagement();

propInBindAttributesManager.getHTMLString(propInBars);

test("test get prop from bind attribute", ()=>{
    expect(propInBindAttributesManager.props).toContain("color");
});
