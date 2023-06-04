var importes = [10, 20, 30, 40];

var suma = 0
for (var i=0; i < importes.length; i++)
{
   console.log(suma, i, importes[i])
   suma = suma + importes[i]
}
console.log(suma)

suma = 0
for (var elemento of importes) {
    suma += elemento
}
console.log("segundo metodo", suma)

var suma = 0
var indice = 0
while (indice < importes.length) {
    suma += importes[indice]
    indice++
}
console.log("tercer  metodo", suma)
suma = 0
for (var j in importes) {
   console.log(j, importes[j])
   suma += importes[j]
}
console.log("cuarto metodo", suma)
