/******************************************************************************************/
// Extraer del dom los tags “capacity-component” y almacenarlos en una variable.

const capacityComponents = document.querySelectorAll("capacity-component");

console.log("capacityComponents: ", capacityComponents);

// Crear un array con el atributo ability de cada elemento de esos tag (capacity-component).

const abilities = [];

function getAbility() {
  for (let capacityComponent of capacityComponents) {
    abilities.push(capacityComponent.getAttribute("ability"));
  }
}

getAbility();

console.log("abilities: ", abilities);

// Crear un objeto iterable Map con los pares [posicion, ability] donde posición es la posición que ocupa en el array y ability el atributo del elemento.

const myMap = new Map();
let count = 0;

for (let ability of abilities) {
  myMap.set(count, ability);
  count++;
}

console.log("myMap: ", myMap);

// Mostrar el número de tags div hay dentro del tag main.
const divsInMain = document.querySelectorAll("main div");

console.log("divsInMain: ", divsInMain);

// Mostrar el número de tags div tienen el atributo class=”col” y cuantos el atributo class=”row”

const colDivs = [];
const rowDivs = [];

function getColAndRowDivs() {
  for (let div of divsInMain) {
    if (div.classList.contains("col")) {
      colDivs.push(div);
    } else if (div.classList.contains("row")) {
      rowDivs.push(div);
    }
  }
}

getColAndRowDivs();

console.log("colDivs: ", colDivs);
console.log("rowDivs: ", rowDivs);

/* 
==> Crear una clase javascript llamada Kairosero.
==> Que tenga las propiedades: nombre, capacidad y proyecto
==> Al pedir la propiedad “capacidad” esta se devuelve en mayúsculas 
==> Al setear la propiedad “capacidad” se comprueba si es uno de los siguientes valores: desarrollo, agile, devops, ux. Si no es una de estas se le asigna la capacidad “staff”
*/

class Kairosero {
  constructor(nombre, capacidad, proyecto) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.proyecto = proyecto;
  }

  get capacidad() {
    return this._capacidad.toUpperCase();
  }

  set capacidad(value) {
    let includesCapacities = ["desarrollo", "agile", "devops", "ux"];
    if (includesCapacities.includes(value)) {
      this._capacidad = value;
    } else {
      this._capacidad = "staff";
    }
  }
}

const obj1 = new Kairosero();
obj1.capacidad = "desarrollo";
console.log("obj1.capacidad: ", obj1.capacidad);

const obj2 = new Kairosero();
obj2.capacidad = "talento";
console.log("obj2.capacidad: ", obj2.capacidad);

const obj3 = new Kairosero("dany", "tr", "trt");
console.log("obj3.capacidad: ", obj3);

console.log("obj3.capacidad: ", obj3);
/* 
Dado el siguiente json, crear 3 objetos Map de objetos Kairoseros por proyecto, donde los pares de cada elemento del Map sea [nombre, capacidad]
*/
const KairosProyects = [
  { nombre: "Dani", capacidad: "desarrollo", proyecto: "web Kairós" }
];

const webKairos = new Map();
const glomo = new Map();
const universia = new Map();

function setProyects() {
  for (let proyect of KairosProyects) {
    if (proyect.proyecto === "web Kairós") {
      webKairos.set(proyect.nombre, proyect.capacidad);
    } else if (proyect.proyecto === "GLOMO") {
      glomo.set(proyect.nombre, proyect.capacidad);
    } else {
      universia.set(proyect.nombre, proyect.capacidad);
    }
  }
}

setProyects();
console.log("webKairos: ", webKairos);
console.log("glomo: ", glomo);
console.log("universia: ", universia);

const data = [
  { nombre: "Dani", capacidad: "desarrollo", proyecto: "web Kairós" },
  { nombre: "Juanjo", capacidad: "agile", proyecto: "GLOMO" },
  { nombre: "Javi", capacidad: "devops", proyecto: "Universia Hub" },
  { nombre: "Juan Pablo", capacidad: "ux", proyecto: "web Kairós" },
  { nombre: "Elena", capacidad: "desarrollo", proyecto: "Universia Hub" },
  { nombre: "Karina", capacidad: "agile", proyecto: "GLOMO" },
  { nombre: "Laura", capacidad: "devops", proyecto: "GLOMO" },
  { nombre: "Marta", capacidad: "ux", proyecto: "Universia Hub" },
  { nombre: "Rubén", capacidad: "desarrollo", proyecto: "web Kairós" },
  { nombre: "Mánu", capacidad: "agile", proyecto: "web Kairós" },
  { nombre: "Mánu", capacidad: "agile", proyecto: "web Kairós" }
];

const mapWebKairos = new Map();
const mapGLOMO = new Map();
const mapUniversiaHub = new Map();
const maps = {
  "web Kairós": mapWebKairos,
  GLOMO: mapGLOMO,
  "Universia Hub": mapUniversiaHub
};

data.forEach(item => maps[item.proyecto].set(item.nombre, item.capacidad));

console.log(mapGLOMO);
console.log(mapWebKairos);
console.log(mapUniversiaHub);
/* Generar número aleatorios (con Math.random) del 1 al 10 e insertarlos en una variable del tipo que consideréis, 
de manera que en el menor tiempo posible tenga una lista de números de 1 al 10. 
Mostrar el número de intentos que necesitó para conseguirlo. */

function randomNum() {
  let arrOneToTen = [];
  let count = 0;

  while (arrOneToTen.length < 10) {
    let num = Math.floor(Math.random() * 11);

    if (!arrOneToTen.includes(num, 0)) {
      arrOneToTen.push(num);
    }
    count++;
  }
  console.log("numero de intentos: ", count, "arrOneToTen", arrOneToTen);
}

randomNum();

let mySet = new Set();
let count2 = 0;

function randomNum2() {
  while (mySet.size < 10) {
    mySet.add(Math.floor(Math.random() * 10) + 1);
    count2++;
  }
}

randomNum2();
console.log("numero de intentos: ", count2, "arrOneToTen", mySet);
