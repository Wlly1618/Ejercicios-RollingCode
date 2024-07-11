function msg(str) {
  let i = 0;
  let may = (64 < str.charCodeAt(0) && str.charCodeAt(0) < 91) ? true : false;
  let min = (96 < str.charCodeAt(0) && str.charCodeAt(0) < 123) ? true : false;

  if (may)
  {
    for (i=1; i < str.length; i++)
    {
      const n = str.charCodeAt(i); 
      if (n > 96 && n < 123)
      {
        min = true
        break;
      }
    }
  }
  
  if (min)
  {
    for (i=1; i < str.length; i++)
    {
      const n = str.charCodeAt(i);
      if (n > 64 && n < 91)
      {
        may = true
        break;
      }
    }
  }

  return may && min ? "mayusculas y minusculas" : may ? "mayusculas" : "minusculas"    
}

const input = prompt("Ingrese un texto:")

document.write(`El texto "${input}" tiene ${msg(input)}`)