import {join} from "path";

const requireHelper = name => {
	const req = require;
	return req(name);
}

export default requireHelper;
