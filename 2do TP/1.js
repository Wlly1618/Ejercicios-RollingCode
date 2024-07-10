const year_olds = parseInt(prompt("Ingresar edad"))

if (year_olds > 18)
  document.write(`Tienes la edad necesaria ${year_olds}, puedes conducir. . .`)
else
  document.write(`No tienes la edad necesaria ${year_olds}, no puedes conducir. . .`)