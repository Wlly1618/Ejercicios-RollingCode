let state = false
let str_output = ""
do
{
  const input = prompt("Ingresar una palabra:")
  state = confirm("Continuar")
  
  if (str_output.length < 1)
    str_output += input
  else
    str_output += ("-" + input)

} while (state)

document.write(`${str_output}`)