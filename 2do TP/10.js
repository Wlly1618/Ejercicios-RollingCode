const row = parseInt(prompt("Ingrese la cantidad de Filas:"))
const col = parseInt(prompt("Ingrese la cantidad de Columnas:"))

let it = row * col
let str = `
  <table>
    <tbody>
`

for (let i = 0; i < row; i++)
{
  str += `
    <tr>
  `
  for (let j = 0; j < col; j++)
  {
    str += `
      <td> ${it} </td>
    `
    it--;
  }

  str += `
    </tr>
  `
}

str += `
    </tbody>
  </table>
`

document.write(str)