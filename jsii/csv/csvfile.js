const Papa = require("papaparse")
const fs = require("node:fs")
const file = fs.createReadStream('hw_25000.csv')

Papa.parse(file, {
	complete: function(results) {
		console.log("Finished:", results);
	}
});