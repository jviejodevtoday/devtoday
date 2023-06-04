var promesa = (tiempo) => new Promise((resolve, reject ) => {
    setTimeout(()=>{
        if (tiempo % 2 == 1) 
            reject(`esto fallo ${tiempo}`)
        resolve(`finish time ${tiempo}`)
    }, tiempo)
})

Promise.race([promesa(1000), promesa(2001)]).then(r => {
    console.log(r)
}).catch(error => {
    console.log(error)

})