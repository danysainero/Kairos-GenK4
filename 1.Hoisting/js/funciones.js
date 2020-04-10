console.log('******************* funciones ***************')

// En las funciones, la declaración, inicialización y asignación se hacen a la vez.

let a = 1;

function fn(){
  console.log(`a dentro de la función ${a}`);
}

fn()
console.log(`a fuera de la función ${a}`);



// Variables dentro de funciones = LOCAL
function fn2(){
  let b = 1;
  console.log(`b dentro de la función ${b}`); // 1 - Porque la variable está declarada
}
fn()
console.log(`b fuera de la función ERROR`); // PETA porque no hay nada global declarado




console.log('********Declaración de variables y llamada de funciones ***************')
// DEBE SER DECLARADA ANTES DE SER LLAMADA SINO PETA.
let miEdad = getEdad();
const edad = 29;
function getEdad() {
//  return edad;
}
//console.log(miEdad) -- PETA porque DEBE ser decalrada antes de ser llamada


const edad2 = 29;
function getEdad2() {
  return edad2;
}
let miEdad2 = getEdad2();
console.log(miEdad2) // 29


console.log('********Función de elevación ***************')
function sumArray(array) {
  return array.reduce(sum);
  function sum(a, b) {
    return a + b;
  }
}
sumArray([5, 10, 8]); // => 23