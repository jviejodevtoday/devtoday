function letraDni(dni) {
const LETRAS = ["T","R","W","A","G","M","Y","F",
                "P","D","X","B","N","J","Z","S",
                "Q","V","H","L","C","K","E"]
const resto = parseInt(dni) % 23
return LETRAS[resto]
}
console.log(letraDni("09408901"))
// 09408901f