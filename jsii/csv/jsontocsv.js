const Papa = require("papaparse")
const fs = require("node:fs/promises")
const csv = Papa.unparse(
    [
        {name:"JHON", age:18},
        {name:"MICHAEL", age:21},
        {name:"JACK", age:23},
        {name:"MARY", age:25},
        {name:"LUCAS", age:28}
    ]
)
console.log(csv)

fs.writeFile("./create.csv", csv).then(r => {
    console.log("fichero grabado")
})