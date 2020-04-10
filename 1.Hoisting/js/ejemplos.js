console.log('******************* Ejemplo 1 **********************')
var foo = 1;
 
 function test() {
  console.log(foo);
 };
 test(); //1 => var foo está declarada de forma global y asignada antes de la función, por lo que se accede sin problema al valor


console.log('******************* Ejemplo 2 **********************')

var foo2 = 1;
 
function test2() {
 console.log(foo2);
 var foo2 = 2;
};
test2(); //undefined => dentro de la función, existe una var llamada también foo, por lo que la función solo busca en su ámbito. Al estar declarada e inicializada despues del log, gracias al hoisting sabe que existe y que se ha inicializado a undefined
 

console.log('******************* Ejemplo 3 **********************')

function test4()
{
console.log(x);
}
 
var x; 
test4(); //undefined => x ha sido declarada e inicializada a undefined, pero no asignada a un valor
 
x = 3;
test4(); //3=> x ya ha sido asignada a un valor


console.log('******************* Ejemplo 4 **********************')

var beOnTop;
 
beOnTop = function() {
 console.log('second');
};
 
beOnTop();//second => la variable se declara y asigna valor antes de la llamada a la funcion, por lo que la funcion existe al llamarse


console.log('******************* Ejemplo 5 **********************')

foo5();
 
function foo5() {
 console.log(1);
}
 
var foo5 = function() {
 console.log(2);
};
 
function foo5() {
 console.log(3);
}
 
foo5(); //3 2 => por el hoisting, la primera ejecución de la función busca la definición de foo, encuentra una primera definición, luego una variable inicializada a undefined y luego otra función que sobreescribe la primera función, por lo que la primera ejecución dará 3. La última ejecución, la variable ya ha sido asignada a una función y sobreescribe a las otras funciones, por lo que el resultado será 2



console.log('******************* Ejemplo 6 **********************')
//si se descomenta, la ejecución se rompe al dar error!!!

/* beOnTop2();
 
var beOnTop2;
 
beOnTop2 = function() {
 console.log('second');
}; */
//beOnTop is not a function => al ser una función almacenada en una variable, primero se ejecutan las funciones y despues se procesan las variables, por lo que la funcion no existe al ejecutarse ya que la variable al comienzo está inicializada a undefined

console.log('******************* Ejemplo 7 **********************')

var foo7 = 1;
 
function test7() {
 console.log(foo7);
 let foo7 = 2;
};
test7(); // ReferenceError => dentro de la función, existe un let llamado también foo, por lo que la función solo busca en su ámbito. Al estar declarada con let al ejecutar el log la variable no aplica el hoisting y el log no sabe que existe la variable por lo que dará error
 
