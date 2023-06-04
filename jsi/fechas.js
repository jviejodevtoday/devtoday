var f1 = new Date(Date.now())
console.log(f1.toLocaleTimeString())
console.log(f1.toLocaleDateString())
console.log(f1.toLocaleString())
console.log(f1.toString())

var f2 = new Date(0)
console.log(f2.toString())
console.log(f2.getTimezoneOffset())