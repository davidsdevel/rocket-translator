module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module"
	},
	"rules": {
		"arrow-spacing": "error",
		"no-duplicate-imports": ["error",
		{ 
			"includeExports": true
		}],
		"prefer-destructuring": ["error", {
			"array": false,
			"object": true
		}],
		"no-useless-constructor": "error",
		"prefer-template": "error",
		"no-useless-concat":"error",
		"no-console":"off",
		"semi": [
			"error",
			"always"
		],
		"quotes": [
			"error",
			"double"
		],
		"indent":[
			"error",
			"tab"
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"eol-last": [
			"error",
			"always"
		],
		"comma-spacing": ["error",
		{
			"before": false,
			"after": true
		}]
	}
};
