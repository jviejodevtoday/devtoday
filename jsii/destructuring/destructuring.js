const [a, b] = [1, 3]
console.log(a, b)

const [a1, b1] = [1, 3, 26]
console.log(a1, b1)




const objeto1= {
  nombre:"juan",
  edad:1
};

const { nombre } = objeto1
console.log(nombre)

const { nombre: n1 , edad} = objeto1
console.log(n1, edad)

// spreadMethod
var arr = [-10, 2, 3, 4, 5, 6,]

console.log(Math.min(arr));

function f1(a, b, c) {
  return a + b + c 
}


console.log(f1(...arr))


var objeto2 = {
    name : "JHON",
    age: 13
}
console.log(objeto2)

objeto2 = {...objeto2, "age": 15}
console.log(objeto2)


