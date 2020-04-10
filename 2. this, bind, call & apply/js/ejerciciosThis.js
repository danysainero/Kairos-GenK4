
// ************************* EJERCICIOS  *************************
console.log('************ EJERCICIOS');


/************************* 1 ******************************/
console.log('* 1 *')


function bike() {
  console.log(this.name);
}

var name = "Ninja";
var obj1 = { name: "Pulsar", bike: bike };


bike();           //Ninja - porque es global.  
obj1.bike();      /* Pulsar  - porque es local:		 


function bike() {
  console.log(this.name);
}

var obj1 = { 
        name: "Pulsar", 
        bike: bike() {
            console.log(this.name);  // AQUI YA ES LOCAL
            } 
    };

obj1.bike()


*/


/************************** 2 *****************************/
console.log('* 2 *')

var obj1 = {
  name: "Pulsaría",
  bike: function() {
    console.log(this.name);
  }
}
var obj2 = { 
   name: "Gixxeres", 
   bike: obj1.bike 
};

var name = "Cervantes";
var bike = obj1.bike;

bike();           // Cervantes - Es global: función que señala a variable global.
obj1.bike();      // Pulsaría - es local: función dentro de objeto.
obj2.bike();      /* Gixxeres - es local: función dentro de objeto:


function bike() {
  console.log(this.name);
}

var obj2 = { 
   name: "Gixxeres", 
   bike: function() {
    console.log(this.name);
  }
};

*/

/************************** 3 *****************************/
console.log('* 3 *')

function bike() {
  console.log(this.name);
}

var name = "Ninja";
var obj = { name: "Pulsar" }

bike();           // Ninja - función que apunta a variable global.
bike.call(obj);   // Pulsar - usa método call y pasa como contexto el objeto obj


/************************* 4 ******************************/
console.log('* 4 *')

var bike = function() {
  console.log(this.name);
}
var name = "Ninja";
var obj1 = { name: "Pulsar" };
var obj2 = { name: "Gixxer" };

var originalBikeFun = bike;
bike = function() {
  originalBikeFun.call(obj1);
};

bike();           // ???
bike.call(obj2);  // ???


/************************** 5 *****************************/
console.log('* 5 *')


function multiply(p, q, callback) {
	callback(p * q);
}

let user = {
	a: 2,
	b:3,
	findMultiply: function() {
		multiply(this.a, this.b, function(total) {
			console.log(total);
			console.log(this === window);
		})
	}
}

user.findMultiply(); // ???  // ???


/************************** 6 *****************************/
console.log('* 6 *')

var count = 5;
function test () {
	console.log(this.count === 5);
}

test() // ???


/*************************** 7 ****************************/
console.log('* 7 *')


function foo () {
	'use strict';
	console.log("Simple function call")
	console.log(this === window); 
}

let user1 = {
	count: 10,
	foo: foo,
	foo1: function() {
		console.log(this === window);
	}
}

user1.foo()  //???
let fun1 = user1.foo1;
fun1() // ???
user1.foo1()  // ???

/****************************** 8 *************************/
/*  ME PETA 

(function(){
	console.log("Anonymous function invocation");
	console.log(this === window);
})();
*/  
// ???



/****************************** 9 *************************/
console.log('* 9 *')


function foo() {
	'use strict';
	console.log("Simple function call")
	console.log(this === window); 
}

foo();
// ???


/******************************* 10 ************************/
console.log('* 10 *')

function foo() {
  return this;
}

foo() // ???


/****************************** 11 *************************/
console.log('* 11 *')


function foo() {
  'use strict'; // see strict mode
  return this;
}

foo() // ???


/***************************** 12 **************************/
console.log('* 12 *')


var obj = {a: 'Custom'};

var a = 'Global';

function whatsThis() {
  return this.a;
}

whatsThis();          // ???
whatsThis.call(obj);  // ???
whatsThis.apply(obj); // ???


/**************************** 13 ***************************/
console.log('* 13 *')


function outer() {
    function inner() {
        console.log(this); // ???
    }

    console.log(this); // ???
    inner();
}
outer.call('outer');


/**************************** 14 ***************************/
console.log('* 14 *')


function myName(name) {
this.name = name;
console.log(this.name)
};

myName('Global'); // ???

