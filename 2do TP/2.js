const input = parseInt(prompt("Ingresa un numero entre 0,10:"))

console.log(input)

if (isNaN(input))
  document.write(`Introduce un numero valido`)
else if (input < 0 || input > 10)
  document.write(`Numero Erroneo`)
else
{
  let msg = "Muy deficiente"

  if (input > 2)
  {
    if (input > 7)
    {
      msg = "Notable"
      if (input > 9) msg = "Sobresaliente"
    }
    else if (input > 4)
    {
      msg = "Suficiente"
      if (input > 6) msg = "Bien"
    }
    else msg = "Insuficiente"
  }

  document.write(`${msg}`)
}