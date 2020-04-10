/*
Siempre apunta al contexto más global: (window o global)

Function = global scope >>>> en una función apuntará siempre al contexto global (window o global).
Objects = local scope && global scope    >>>> en los objetos apuntará a global o a una prop DENTRO de ese objeto.

*/

console.log(`Demo this === window :  ${(this === window)}`);  // true



// ************************* THIS APLICADO A OBJETOS  *************************
console.log('************ this aplicado a objetos: GLOBAL Y LOCAL SCOPE');

//-1 GLOBAL SCOPE
var myApp = {
    name : 'Megan',
    lastName : 'Fox',
    completeName : this.name + this.lastName
  }
console.log( `Global scope 1: ${myApp.completeName}`); // undefined >> porque busca en global.


//-2 GLOBAL SCOPE
var name = 'Corona ';
var lastName= 'Virus ';

var myApp2 = {
  name : 'Megan',
  lastName : 'Fox',
  completeName : this.name + this.lastName
}

console.log( `Global scope 2: ${myApp2.completeName}` ); // Corona Virus >> porque busca en global.


//** DE GLOBAL A LOCAL SCOPE: Para que busque dentro tenemos que crear patrón de invocación ():


//-3 LOCAL SCOPE
const video = {
  title: 'a',
  play() {
    console.log(`Local scope 3: ${this.title}`); 
  }
};
video.play() // a


//-4 LOCAL SCOPE
var myApp = {
  name : 'Megan',
  lastName : 'Fox',
  completeName : function(){
    return this.name + ' ' + this.lastName;
  }
} 
console.log( `Local scope 4: ${myApp.completeName()}`); // Megan Fox  


//-5 LOCAL SCOPE: Recorrido Array local.  

const video2 = {
  title: 'a',
  tags: ['1', '2', '3'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(`Recorrido array local ${tag}`)
    }); 
  }
};
video2.showTags() // 1 2 3 - función dentro de objeto.


//6 - thi

var person1 = {
  name : 'Angelina', 
  lastName : 'Jolie',
  birthDay : '04/06/1975',
  lastMovie : 'The Tourist'
};

var printName = function(who) {
  console.log(this[who].name + ' ' + this[who].lastName);
}
printName('person1'); 




//6 - CAMBIO NOMBRE
var person = function(name, age) {

    this.name = name,
    this.age = age,

    this.changeName = function (name) {
      this.name = name;
    }
  }

var try1 = new person ('David', 21); 
try1.changeName('Pepe');

document.write(`cambio nombre ${try1.name}`);


// 7 - CALCULO FECHA NACIMIENTO

function person2 (name, age) {

  this.name = name,
  this.age = age,
  this.yearOfBirth = bornYear; 
};

function bornYear() {
 return 2020 - this.age;
}


var try2 = new person2 ('David', 21); 

document.write(`fecha nacimiento ${try2.yearOfBirth()}`);



// ************************* THIS EN FUNCIONES  *************************
console.log('************ this en funciones: GLOBAL SCOPE');

function test(){
  console.log( `Demo this en función, isGlobal = ${this === window}`);
}
test(); // true


//-1 GLOBAL - FUNCIÓN DENTRO DE FUNCIÓN >> ¡NO CONFUNDIR CON UN OBJETO!

var name2 = "Strange World";

var myApp = function(){
  var name2 = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + this.name2 ); //apunta a global
  };
  sayHello();
};
 
myApp(); // Hello, Strange World - función apunta a global


//-2 CAMBIAR PARA QUE APUNTE A VARIABLE LOCAL

var name3 = "Strange World"; 

var myApp = function(){
  var name3 = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + name3 ); //variable local definida DENTRO de la función > NO ES THIS.NAME sino NAME
  };
  sayHello();
};
 
myApp(); // Hello, World



// - 3 De global a local en una función:
function Video(title) {
  this.title = title;
  console.log(this)
};

const v = new Video('a'); // = {}
                          //new operator crea un objeto vacío que lo rellena con la función

