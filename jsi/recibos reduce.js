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

 // 2019 200
 // 2020 400
 // 2021 600
 // 2022 900

 const grupos = recibos.reduce((acc, elemento) => {
        const aaaa = acc.find(i => i.aaaa == elemento.aaaa);
        if (aaaa) { 
            aaaa.importe += elemento.importe
        } else {
            acc.push({
                aaaa: elemento.aaaa,
                importe: elemento.importe
            })
        }
        return acc
 },[])

 console.log(grupos)
