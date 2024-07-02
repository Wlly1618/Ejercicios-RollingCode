const n1 = parseInt(prompt("Primer Numero: "))
const n2 = parseInt(prompt("Segundo Numero: "))
const n3 = parseInt(prompt("Tercer Numero: "))

if (n1 >= n2 && n1 >= n3) document.write(`<h1>El primer numero es mayor: ${n1}`)
if (n2 >= n1 && n2 >= n3) document.write(`<h1>El segundo numero es mayor: ${n2}`)
if (n3 >= n1 && n3 >= n2) document.write(`<h1>El tercer numero es mayor: ${n3}`)