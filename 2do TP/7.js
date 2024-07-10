for (let i = 30; i > 0; i--)
{
  let str = ""
  for (let j = 1; j <= i; j++)
    str += `${i}`
  document.write(`<p> ${str} </p>`)
}