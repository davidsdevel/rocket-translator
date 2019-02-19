const {VueCompiler} = require("../Lib/core");

var testHTML = `<div>
    <span>Hello {Name - state - "World"}!!!</span>
</div>`;

test("test filter simple state", () => {
    expect(VueCompiler("Test", testHTML, "")).toBe(`<template>
	<div>
	    <span>Hello {{Name}}!!!</span>
	</div>
</template>
<script>
export default {
	name:Test,
	data(){
		return {
			Name: "World"
		}
	}
}
</script>
`);
});
