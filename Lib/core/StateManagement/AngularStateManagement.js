const StateManagement = require("./StateManagement");

class AngularStateManagement extends StateManagement {
	get componentData() {
		let states = "";
		if(this.states.length > 0) {
			this.states.forEach(e => {
				if(typeof e === "object") {
					states += `${e.key} = ${e.value};`;
				} else {
					states += `${e} = "";`;
				}
			});
		}
		console.log(this.states);
		return states;
	}
}
module.exports = AngularStateManagement;
