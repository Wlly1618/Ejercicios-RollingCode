const l1 = parseInt(prompt("Ingrese el primer lado del rectangulo:"))
const l2 = parseInt(prompt("Ingrese el segundo lado del rectangulo:"))

document.write(`
  <p> El rectangulo con lados [ ${l1}, ${l2} ] tiene como perimetro -> ${ 2 * (l1 + l2) } </p>  
`)
