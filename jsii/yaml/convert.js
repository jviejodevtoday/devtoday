const YAML = require('yaml');
const jsonObject = {
    "a": 1,
    "b": 2,
    "c": [
      {
        "d": "cool", 
      },
      {
        "g": "soon",
        "d": new Date(),
        "e": true,
        "h": undefined,
        "i": false,
        "j": null
      }
    ]
  }
const doc = new YAML.Document();
doc.contents = jsonObject;
console.log(doc.toString());