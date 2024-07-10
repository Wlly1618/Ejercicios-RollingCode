const input = prompt("Ingrese un texto:")

let output = ""
for (let i=input.length - 1; i >= 0; i--)
{
  output += input[i]
}

document.write(`Texto al reves: ${output}`)