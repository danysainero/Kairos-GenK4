/*** REDUCE *****************************************************************/

/********************************************************************/
// Reducir el array a un unico valor con la suma de todos sus elementos

function total(arr) {
  return arr.reduce((acc, val) => {
    return acc + val;
  });
}

console.log("ejercicio 1: ", total([1, 2, 3]));

/********************************************************************/
//devolver la suma del precio de todos los productos del carrito

const carrito = [
  { service: "consultoría", price: 3000 },
  { service: "desarrollo", price: 10000 },
  { service: "soporte", price: 7000 }
];

const totalPrice = carrito.reduce((acc, item) => {
  return (acc = acc + item.price);
}, 0);

console.log("ejercicio 2: ", totalPrice);

/********************************************************************/
//concatenar el array y convertir en un string

function stringConcat(arr1) {
  return arr1.reduce((acc, val) => (acc += "" + val));
}

const res = stringConcat([1, 2, 3]);
console.log("ejercicio 3: ", res); // "123"

/********************************************************************/
//devolver el numero total de personas que han votado

const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Jean", age: 19, voted: false },
  { name: "Joey", age: 41, voted: true }
];

function totalVotes(voters) {
  const result = voters.reduce(
    (acc, voter) => (voter.voted ? acc + 1 : acc + 0),
    0
  );
  return result;
}

console.log("ejercicio 4: ", totalVotes(voters)); // 2

/********************************************************************/
//Devolver el numero mayor

function foo(numbers) {
  return numbers.reduce((highest, number) => {
    if (highest < number) {
      highest = number;
    }
    return highest;
  });
}

console.log("ejercicio 5: ", foo([3000, 41, 26, 1000]));

/********************************************************************/
//Devolver la suma de todas las edades

const people = [
  { name: "luna", sex: "f", age: 1, species: "dog" },
  { name: "jimmy", sex: "m", age: 2, species: "human" },
  { name: "snoop", sex: "m", age: 2, species: "human" },
  { name: "jennifer", sex: "f", age: 1, species: "human" },
  { name: "yeller", sex: "f", age: 2, species: "dog" }
];

const totalAges = people.reduce((acc, person) => {
  return acc + person.age;
}, 0);

console.log("ejercicio 6: ", totalAges);

/********************************************************************/
//Devolver la media de edad de todas las personas

const xmen = [
  { name: "Xavier", sex: "m", age: 50 },
  { name: "tormenta", sex: "f", age: 31 },
  { name: "Jean Grey", sex: "f", age: 28 },
  { name: "Júbilo", sex: "f", age: 18 }
];

const mediaAges =
  xmen.reduce((acc, mutant) => {
    return (acc += mutant.age);
  }, 0) / xmen.length;

console.log("ejercicio 7: ", mediaAges);

/********************************************************************/
//Pasar como parametro un numero y devolverlo al revés y cada cifra en una posicion de un array
function reverseArr(num) {
  return Array.from(String(num)).reverse();
}

console.log(reverseArr(123)); // expected ["3","2","1]

/********************************************************************/
/* Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
how many from 36-55, and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties. See the example output at the bottom. */


const voters2 = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false }
];



const ageRanges = (ages) => {
 return ages <= 25 ? ['youth', 'youngVotes'] : (ages <= 35 ? ['mids', 'midVotes'] : ['olds', 'oldVotes']);
}

const voterCount = voters2.reduce((a, { age, voted }) => {
  const [prop, voteProp] = ageRanges(age);
  a[prop] = (a[prop] || 0) + 1;
  if (voted) {
    a[voteProp] = (a[voteProp] || 0) + 1;
  }
  return a;
}, {});

console.log(voterCount); /* OUTPUT --> { youngVotes: 1,  youth: 4,  midsVotes: 3,  mids: 4,  oldVotes: 3,  olds: 4 } */