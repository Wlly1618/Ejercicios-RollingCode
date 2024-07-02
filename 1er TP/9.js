const word = prompt("Ingrese una palabra de 4 letras:")
let vocals = ""
const c1 = word.charAt(0)
const c2 = word.charAt(1)
const c3 = word.charAt(2)
const c4 = word.charAt(3)

vocals += (c1 == "a" || c1 == "e" || c1 == "i" || c1 == "o" || c1 == "u") ? c1 : ""
vocals += (c2 == "a" || c2 == "e" || c2 == "i" || c2 == "o" || c2 == "u") ? c2 : ""
vocals += (c3 == "a" || c3 == "e" || c3 == "i" || c3 == "o" || c3 == "u") ? c3 : ""
vocals += (c4 == "a" || c4 == "e" || c4 == "i" || c4 == "o" || c4 == "u") ? c4 : ""

document.write(`<h1>Las vocales:  ${vocals}</h1>`)