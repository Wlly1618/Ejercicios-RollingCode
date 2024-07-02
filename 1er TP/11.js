const n = parseInt(prompt("Ingrese un Numero: "))

let msg = ""
if (!(n % 2)) msg += "2, "
if (!(n % 3)) msg += "3, "
if (!(n % 5)) msg += "5, "
if (!(n % 7)) msg += "7"

if (msg) document.write(`<h1>El numero ${n} es divisble por los siguientes numeros ${msg}</h1>`)
else document.write(`<h1>El numero ${n} no es divisible por 2, 3, 5 y 7</h1>`)
