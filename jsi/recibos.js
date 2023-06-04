
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

var resultado = [
    {aaaa:2019, importe: 200},
    {aaaa:2020, importe: 400},
    {aaaa:2021, importe: 600},
    {aaaa:2022, importe: 900},
    
]

const grupos = recibos.reduce( (acc, ele) => {
      var aaaa = acc.find(i => i.aaaa == ele.aaaa)
      if (aaaa) {
        aaaa.importe += ele.importe
      } else {
        acc.push({
            aaaa: ele.aaaa,
            importe: ele.importe
        })
      }
      return acc
} , [])

console.log(grupos)