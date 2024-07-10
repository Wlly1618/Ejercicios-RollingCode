for (let i = 1; i <= 30; i++)
{
  let str = ""
  for (let j = 1; j <= i; j++)
    str += `${i}`
  document.write(`<p> ${str} </p>`)
}