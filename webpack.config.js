const path = require("path");

module.exports = {
    entry: "./lib/cli.js",
    mode:"production",
    target:"node",
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "index.js",
    }
};
