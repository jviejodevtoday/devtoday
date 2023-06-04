
const buscar = (url) => fetch(url).then(re => {
    return re.text().then(texto => {
        console.log(texto.substring(0, 100))
        return texto
    })
}).catch(err => {
    return err
});


// buscar("https://www.google.com").then(res => console.log(res))

const promesa = (tiempo) => new Promise((resolve, reject) => {
    console.log(`empieza la espera ${tiempo}`)
    setTimeout(() => {
        console.log(`se paso ${tiempo}`)
        if (tiempo % 2 == 1){
            reject(`${tiempo} - fallo `)
        }
        resolve(tiempo)
    }, tiempo)
});

promesa(1000).then(x => console.log('se resuelve la promesa ' + x))

; (async () => {
    try {
        const resultados = await Promise.all([promesa(2000), promesa(1001)])
        console.log(resultados)
        
    } catch (error) {
        console.log(error)
    }
    const r1 = await Promise.allSettled([promesa(2000), promesa(1001)])
    console.log(r1)
    try {
        const r2 = await Promise.all([promesa(2000), promesa(1001)])
        console.log('al......', r2)
        
    } catch (error) {
        console.log('error all', error)
    }
    console.log("fin")
    // const re = await buscar("https://www.google.es");

    //console.log(re.substring(0, 100))
}
)()