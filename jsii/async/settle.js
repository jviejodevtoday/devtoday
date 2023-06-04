var promesa = (tiempo) => new Promise((resolve, reject ) => {
    setTimeout(()=>{
        if (tiempo % 2 == 1) 
            reject(`esto fallo ${tiempo}`)
        resolve(`finish time ${tiempo}`)
    }, tiempo)
})
// se ejecutan todas y cuando 
// terminen se ejecuta el then
Promise.allSettled([promesa(500), promesa(1001)]).then(r => {
    console.log(r)
}).catch(error => {
    console.log(error)

})