import fs from 'node:fs'
import readline from 'node:readline'


const rl = readline.createInterface({
    terminal:false,
    input:fs.createReadStream('../../data/pg/customers.jsonl')
})

var customers = []
for await (var row of rl) {
    customers.push(JSON.parse(row))
}



console.log(customers.slice(0, 10))