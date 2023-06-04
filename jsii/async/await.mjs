var promesa = (tiempo) => new Promise((resolve, reject ) => {
    setTimeout(()=>{
        if (tiempo % 2 == 1) 
            reject(`esto fallo ${tiempo}`)
        resolve(`finish time ${tiempo}`)
    }, tiempo)
})

const r1 = await promesa(100)
console.log(r1)
try {
    const r2 = await promesa(101)
    console.log(r2)
    
} catch (error) {
    console.log(error)
}