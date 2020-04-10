function contadorLetras(texto, letra) {
  let count = 0;
  for (let item of texto) {
    if (item === letra) {
      count++;
    }
  }
  dummyFunction();
  
  return count;
}

function dummyFunction(){
  return 'Soy una función tonta';
}

module.exports = letterCount;