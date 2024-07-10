for (let i = 1; i < 501; i++)
{
  let str = `${i}`
  if (!(i % 4))
    str += "\t(Multiplo de 4)"

  if (!(i % 9))
    str += "\t(Multiplo de 9)"

  document.write(`<p> ${str} </p>`)

  if (!(i % 5))
    document.write(`<p> ———————————————————— </p>`)
}