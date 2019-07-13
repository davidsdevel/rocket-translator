let VueManagement = require("../src/core/VueStateManagement");

const VueFilter = new VueManagement().filterHTML;

var testHTML = `<div>
    <span>Hello {Name - state - "World"}!!!</span>
</div>`;

test("test filter simple state", () => {
    expect(VueFilter(testHTML)).toMatch(`<div>
    <span>Hello {{Name}}!!!</span>
</div>`);
});
