const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

let str = ``

for (let i=0; i < months.length; i++)
{
  str += `<li>${months[i]}</li>`
}

str = `<ol> ${str} </ol>`

document.write(str)