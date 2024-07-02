const n = parseInt(prompt("Ingrese un Numero: "))

if (!(n % 2)) document.write(`<h1>El numero ${n} es divisible por 2`)
else if (!(n % 3)) document.write(`<h1>El numero ${n} es divisible por 3`)
else if (!(n % 5)) document.write(`<h1>El numero ${n} es divisible por 5`)
else if (!(n % 7)) document.write(`<h1>El numero ${n} es divisible por 7`)
else document.write(`<h1>El numero ${n} no es divisible por 2, 3, 5 y 7`)