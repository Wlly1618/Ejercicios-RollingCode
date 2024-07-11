function msg(number) 
{
  return parseInt(number) % 2 ? "impar" : "par"   
}

const input = prompt("Ingrese un numero:")

document.write(`El numero ${input} es ${msg(input)}`)