const input = prompt("Ingrese un texto:")

let temp = input.toLowerCase()
for (let i = 0; i < input.length + 1; i++)
{
  if (temp[i] == "a" || temp[i] == "e" || temp[i] == "i" || temp[i] == "o" || temp[i] == "u")
  {
    document.write(`En el texto *${input}* la vocal "${temp[i]}" esta en la posicion [${i}]`)
    break;
  }
}

