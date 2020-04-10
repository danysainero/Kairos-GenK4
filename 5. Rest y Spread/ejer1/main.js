 var Names = ["Jean", "Logan", "Xavier"];

const [first, ...restNames] = Names; //mete el primer elemento del array en first y el resto en restNames

console.log("primer elemento: ", first); // Jean;
console.log("resto de elementos: ", restNames); // ["Logan", "Xavier"];

function foo(...args) {
  console.log(args); // ["Jean",25,"Xavier"]
  console.log(args.length); // 3
}

foo("Jean", 25, "Xavier");

var myName = ["Jean", "Xavier", "Logan"];
var newArr = [...myName, "another", 24];
console.log(newArr); // ["Jean" , "Xavier" , "Logan", "another" , 24] ;

function limpiarEspacios(...cadenas) {
  for (let i = 0; i < cadenas.length; i++) {
    cadenas[i] = cadenas[i].trim();
  }
  return cadenas;
}



 const myArray = ["  hola ", " algo ", " más   "];
 
function removeWhitespaces(...rest) { //aquí usamos el rest para indicarle que recibirá X parámetros
  let result = [];
 	for(let item of rest) {
   	      result = [ ...result, item.trim()] //sin el spread daría error.
 	}
  return result;
}
 
const newArray = removeWhitespaces(...myArray); 
// con el spread aquí convertimos el array en una lista   
//separada de parámetros para usar en la función. 
 
 console.log(newArray); //[ 'hola', 'algo', 'más' ] 


/**************** OBJETOS *********************/
 const objetoDestino = { person1: 'Jean', person2: 'Logan' };

const objetoEntrada = { person1: 'ertert', person2: 'ertert', person3: 'Xavier'};

const objetoFinal1 = {...objetoEntrada, ...objetoDestino};

console.log(objetoFinal1) // { person1: 'Jean', person2: 'Logan', person3: 'Xavier' } 

/**************** ARRAYS *********************/

const array1 = [1,2,3,4,5]
const array2 = [4, 5, ...array1]
console.log(array1) // [1,2,3]
console.log(array2) // [ 4, 5, 1, 2, 3, 4, 5 ] 

 const persona = { nombre: 'Juan', edad: 27 };
const { nombre, edad } = persona // aqui se crean las variables nombre y edad. Su valor corresponde al valor de los atributos de mismo nombre dentro del objeto persona
console.log(nombre) // 'Juan'
console.log(edad) // 27 


 const obj1 = { personn1: 'Jean', person2: 'Logan', person3: 'Xavier' };

const obj2 = { person1: 'ertert', person2: 'ertert', person3: 'ertert'};

const obj3 = { person1: 'wwwww', person2: 'wwwww', person3: 'wwwww'};

const objetoFinal = { ...obj1, ...obj2, ...obj3 };

console.log(objetoFinal) // { person1: 'Jean', person2: 'Logan', person3: 'Xavier' } 




