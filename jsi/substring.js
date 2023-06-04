const fecha = "16-03-2023"
console.log(fecha)
const dia = fecha.substring(0, 2)
console.log(dia)
const mes = fecha.substring(3, 5)
console.log(mes)
const aaaa = fecha.substring(6)
console.log(aaaa)

var a = "    1234.76       "

console.log(a.trimStart())
console.log( a.trimEnd())
console.log( a.trim())


const a = "en el año {aaaa} se vendio {importe}"
var aaaa = 2023
var importe = 456.78

const r1 = a.replace("{aaaa}", aaaa)
const r2 = r1.replace("{importe}", importe)

console.log(r2)