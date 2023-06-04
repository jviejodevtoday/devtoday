const Papa = require("papaparse")
const fs = require("node:fs")
const https = require('https');

const url = 'https://people.sc.fsu.edu/\~jburkardt/data/csv/hw_25000.csv -o hw_25000.csv'
Papa.parse(https.get(url) , {
	complete: function(results) {
		console.log("Finished:", results);
	}
});