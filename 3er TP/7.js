const n = parseInt(prompt("Ingrese un numero:"))

let str = ``

for (let i = 1; i <= 10; i++)
{
  str += `
      <tr>
        <td> ${i} </td>
        <td> ${n * i} </td>
      </tr>
  `
}

str = `
  <table>
    <thead>
      <tr>
        <th> Tabla </th>
        <th> ${n} </th>
      </tr>
    </thead>
    <tbody>
      ${str}
    </tbody>
  </table>
`

document.write(str)