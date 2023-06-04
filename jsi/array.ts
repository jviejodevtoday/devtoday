var array = [10,20,30]
var total = array.reduce((acc, i) => acc + i)
console.log("total ", total)
var re = array.find((i) => i>=34)
console.log(re)
console.log(array.findIndex(i=> i>100))

array.forEach((index, elemento) => {
    console.log(elemento, index)
})

console.log(array.includes(21))

console.log(array.indexOf(201))

console.log(array.fill(100))

console.log(Array(10).fill(100))
=========

var clientes = [
    {
        nombre : "JOSE",
        saldo: 100
    },
    {
        nombre : "JUAN",
        saldo: 11
    },
    {
        nombre: "MARINA",
        saldo: 110
    }
    ];
    
    console.log(clientes.length)
    console.log(clientes.reduce((total, elemento) => total + elemento.saldo, 0))
    
    const saldos = clientes.map(ele => ele.saldo)
    console.log(saldos, Math.max(...saldos))
    console.log(saldos.indexOf(Math.max(...saldos)))
    
    const jose = clientes.find(elemento => elemento.nombre == "JOSE l")
    console.log(jose?.nombre)
    
    clientes.sort((a, b) => a.saldo - b.saldo)
    console.log(clientes)
    
    var recibos = [
        {aaaa:2019, importe:100},
        {aaaa:2019, importe:100},
        {aaaa:2020, importe:200},
        {aaaa:2020, importe:200},
        {aaaa:2021, importe:300},
        {aaaa:2021, importe:300},
        {aaaa:2022, importe:400},
        {aaaa:2022, importe:500},
    ]
    
    console.log(recibos)
    
    const grupos = recibos.reduce((acc, elemento) => {
             var aaaa = acc.find(i=> i.aaaa == elemento.aaaa) 
             if (aaaa) {
                aaaa.importe += elemento.importe
             } else {
                acc.push({
                   aaaa:elemento.aaaa,
                   importe: elemento.importe
                })
             }
             return acc;
    },[])
    
    console.log("total grupos ", grupos)