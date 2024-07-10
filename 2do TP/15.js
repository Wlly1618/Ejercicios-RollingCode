const input = prompt("Ingrese un texto:")

let output = 0
let temp = input.toLowerCase()
for (let i = 0; i < input.length + 1; i++)
{
  if (temp[i] == "a" || temp[i] == "e" || temp[i] == "i" || temp[i] == "o" || temp[i] == "u")
    output ++
}

document.write(`Cantidad de Vocales: ${output}`)