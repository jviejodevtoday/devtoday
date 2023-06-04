var promesa = (tiempo) => new Promise((resolve, reject ) => {
    setTimeout(()=>{
        resolve(`finish time ${tiempo}`)
    }, tiempo)
})

promesa(2000).then(r => {
    console.log(r)
})
promesa(1000).then(r => {
    console.log(r)
})
console.log("fin del programa")
