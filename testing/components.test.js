const StateManagement = require("../test/StateManagement").default;

const component = `<div>
    <MyComponent/>
</div>`;
const componentWithContent = `<div>
	<component component-name="MyComponent" name="Mundo">
		<div>
			<span>Hola {name - prop}</span>
		</div>
	</component>
</div>`;


const componentManager = new StateManagement();
const anotherComponentManager = new StateManagement();

componentManager.getHTMLString(component);
anotherComponentManager.getHTMLString(componentWithContent);

test("test get component from template", ()=>{
    expect(componentManager.components).toContain("MyComponent");
});

test("test get component and content from template", () => {
	expect(anotherComponentManager.components).toContain("MyComponent");
	expect(anotherComponentManager.componentsContent).toEqual([{name:"MyComponent",content: "\t\t<div>\n\t\t\t<span>Hola {name - prop}</span>\n\t\t</div>"}])
})