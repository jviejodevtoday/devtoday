var importes = [10,20,30,40]

var importes3 = importes.map((elemento) => {return elemento * 2})

var importes4 = importes.filter((elemento) => elemento >20  )

var ele30 =importes.find((elemento) => elemento ==20)

console.log(ele30)

var posi = importes.findIndex((elemento) => elemento == 30)
console.log(posi)


importes.forEach((elemento, index) => {
    console.log(elemento, index)
})

var suma = importes.reduce((acc, elemento) => acc + elemento, 0)

suma = importes.reduce((acc, elemento) => {
            acc = acc + elemento;
            return acc
            }
        , 0)

console.log("la suma es", suma)