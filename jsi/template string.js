const aaaa = 2023
const importe = 234
const facturas = [123,445,667]
var a = ` Estimado cliente

En el año ${aaaa} su saldo es de ${importe}

las factura son la siguientes:
${ facturas.map(i => i.toString() + "\n").join("")}

`;
console.log(a)