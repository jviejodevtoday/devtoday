function areaCuadrado(lado) {
    return  Math.pow(lado, 2)
}
function areaCirculo(radio) {
    return   Math.PI * Math.pow(radio, 2);
}
function areaTriangulo(base , altura) {
    return base * altura / 2
}

const aCuadrado = (lado) => Math.pow(lado, 2)  
const aTriangulo = (base, altura) => {
    const area = base * altura / 2
    return area
}
const aTriangulo2 = (base, altura) => base * altura / 2

var a = 5
console.log(areaCuadrado(a));
console.log(aCuadrado(6))
console.log(areaCirculo(a));
console.log(areaTriangulo(10, 20))
console.log(aTriangulo(10, 20))
console.log(aTriangulo2(10, 20))
