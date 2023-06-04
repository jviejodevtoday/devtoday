

var clientes = [
{
    nombre: "JUAN",
    edad: 25,
    saldo: 10
},
{
    nombre: "MARINA",
    edad: 23,
    saldo: 3
},
{
    nombre: "DAVID",
    edad: 23,
    saldo: 30
}
]

clientes.push({
    nombre: "ALBERTO",
    edad:34,
    saldo:40
});

var saldoTotal = clientes.reduce((acc, elemento) => acc + elemento.saldo, 0)

var saldos = clientes.map((elemento) => elemento.saldo)

var maximo = Math.max(...saldos)

var clienteConSaldoMaximo = clientes.find((elemento) => elemento.saldo == maximo)

console.log(clienteConSaldoMaximo)


var minimo = Math.min(...saldos)

var clienteConSaldoMinimo = clientes.find((elemento) => elemento.saldo == minimo)

console.log(clienteConSaldoMinimo)

// console.log(saldos, maximo)

// console.log(saldoTotal)
