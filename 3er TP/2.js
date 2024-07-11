const cities = []

do
{
  let input = prompt("Ingrese el nombre de una ciudad:")
  if (input !== null) cities.push(input)
  else break;
} while (true)

document.write(`
  <p> El arreglo tiene ${cities.length} ciudades </p>
  <ul>
    <li>${cities[0]}</li>
    <li>${cities[2]}</li>
    <li>${cities[cities.length - 1]}</li>
  </ul>
`)

cities.push("Paris")
document.write(`<p>${cities[1]}</p>`)

cities[1] = "Barcelona"

let str = ``
for (let i=0; i < cities.length; i++)
  {
    str += `<li>${cities[i]}</li>`
  }
  
str = `<h1> Arreglo de Ciudades </h1> <ol> ${str} </ol>`

document.write(str)