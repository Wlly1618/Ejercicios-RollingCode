let input = parseInt(prompt("Ingrese un numero mayor que 0:"))

if (isNaN(input) || input < 1)
{
  alert("No ingresaste un numero D:")
  input = 1
}


for (let i = 1; i <= input; i++)
{
  let str = ""
  for (let j = 1; j <= i; j++)
    str += `${j}`
  document.write(`<p> ${str} </p>`)
}