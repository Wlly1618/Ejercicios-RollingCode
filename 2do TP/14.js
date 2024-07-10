const input = prompt("Ingrese un texto:")

let output = input[0]
for (let i = 1; i < input.length; i++)
{
  output += "-" + input[i]
}

document.write(`${output}`)