import { createReadStream} from 'node:fs'
import readline  from 'node:readline'


const rl = readline.createInterface({
    objectMode:true,
    input: createReadStream('f.txt'),
    terminal: false
//     output: process.stdout
});

let cc_grupo1 = null
let cc_grupo2 = null


for await (const line of rl) {
    var linea = JSON.parse(line)
    if (!cc_grupo1) {
        cc_grupo1 = linea.id
        console.log("start grupo ", cc_grupo1)
    }
    if (!cc_grupo2) {
        cc_grupo2 = linea.id + linea.id2
        console.log("\tstart grupo  2", cc_grupo2)
    }
    if (cc_grupo2 && cc_grupo2 != linea.id + linea.id2) {
        console.log("\tfin del grupo 2", cc_grupo2)
        cc_grupo2 = linea.id + linea.id2
    }
    if (cc_grupo1 && cc_grupo1 != linea.id) {
        console.log("fin del grupo ", cc_grupo1)
        cc_grupo1 = linea.id
    }
    
    console.log("\t\tstart detalle", linea.id)
    
}