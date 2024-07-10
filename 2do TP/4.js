let input = ""
let total = 0
do
{
  input = prompt("Ingrese un numero:")

  const n = parseInt(input)
  if (isNaN(n))
    alert("No ingresaste un numero D:")
  else
    total += n
} while (input !== null)

document.write(`El total: ${total}`)