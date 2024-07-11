const results = []

for (let i=0; i < 50; i++)
{
  results.push((Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1))
}

console.log(results)

const it = []

for (let i=2; i < 13; i++)
{
  let c = 0;
  
  for (let j=0; j < results.length; j++)
    if (results[j] == i) c++;

  it.push(c)
}

let str = ``

for (let i = 2; i < 13; i++)
{
  str += `
      <tr>
        <td> ${i} </td>
        <td> ${it[i-2]} </td>
      </tr>
  `
}

str = `
  <table>
    <thead>
      <tr>
        <th>Suma</th>
        <th>Apariciones</th>
      </tr>
    </thead>
    <tbody>
      ${str}
    </tbody>
  </table>
`

document.write(str)