HOISTING EN JAVASCRIPT
 
 
El Hoisting (elevación) es el proceso de mover virtualmente la definición de variable o función al comienzo del Scope, generalmente para variables tipo var y funciones function fun() {...}.
 
Cuando ES2015 introdujo let (y const y class, con un comportamiento de declaración similar al let), el hoisting no es adecuado para describir la inicialización y la disponibilidad de las variables declaradas con let. ES2015 proporciona un mecanismo diferente y mejor para declarar variables con let. A su vez exige prácticas de declaración de variables más estrictas, como por ejemplo que no se pueden usar antes de la definición.
 
1. Error propenso var izado

Podría haber una práctica extraña de declaración de variables var varname y  function funName() {...}  en cualquier lugar del código:
 
num;// => undefined
var num;
num = 10;
console.log(num);// => 10
 
getPi;   // => function getPi() {...}
getPi(); // => 3.14
 
function getPi() {
 return 3.14;
};

Se accede a la variable num antes de la declaración var num, por lo que se evalúa como undefined. La función function getPi() {...} se define al final del archivo. Sin embargo, la función se puede llamar antes de la declaración getPi(), ya que se eleva a la parte superior del alcance. Esta es la elevación clásica .
 
 
2. Ciclo de vida de las variables


El ciclo de vida de las variable consta de las siguientes fases:
La fase de declaración es registrar una variable en el alcance.
La fase de inicialización es asignar memoria y crear un enlace para la variable en el ámbito. En este paso, la variable se inicializa automáticamente con undefined.
La fase de asignación es asignar un valor a la variable inicializada.
Una variable tiene un estado unificado cuando pasa la fase de declaración, pero no alcanza la inicialización. Hay que tener en cuenta que, en términos del ciclo de vida de las variables, la fase de declaración es diferente al de declaración de variables. 
 
 
 
3. Ciclo de vida de variables declaradas con var

var num;// Fases de declaración e inicialización => num toma el valor “undefined” y está en estado “inicializada”.
num = 3;// Fase de asignación => Se le asigna el valor 3 y está en estado “asignada”.
 
Estudiemos un ejemplo. El siguiente código crea un ámbito de función con una declaración var dentro:
 
function multiplyByTen(number) {
 console.log(ten); // => undefined
 var ten;
 ten = 10;
 console.log(ten); // => 10
 return number * ten;
}
multiplyByTen(4); // => 40
 
Cuando JavaScript comienza a ejecutarse multipleByTen(4)y entra en el ámbito de la función, la variable ten pasa los pasos de declaración e inicialización, antes de la primera instrucción. Entonces, cuando se llama console.log(ten), se registra undefined. La declaración ten = 10 asigna un valor inicial. Después de la asignación, la línea console.log(ten)registra correctamente el valor 10.
 
4. Ciclo de vida de funciones

En el caso de una declaración de una función function funName() {...} , es aún más fácil. Las fases de declaración, inicialización y asignación ocurren de una vez al comienzo del alcance de la función de cierre (solo un paso). funName() se puede invocar antes o después de su definición.
 
5. Ciclo de vida de variables declaradas con ‘let’

let condition = true;
if (condition) {
 // console.log(number); // => Throws ReferenceError
 let number;
 console.log(number); // => undefined
 number = 5;
 console.log(number); // => 5
}

Las variables let se procesan de manera diferente que var. La principal distinción es que las fases de declaración e inicialización están divididas . 
En un ámbito de bloque que contiene una declaración de let mivariable. Inmediatamente la variable pasa la fase de declaración , registrando su nombre en el ámbito (paso 1). Luego, continúa analizando las instrucciones de bloque línea por línea. Si intenta acceder a mivariable en esta etapa, JavaScript lanzará ReferenceError: mivariable is not defined. Ocurre porque el estado de mivariable no está inicializado .
mivariable está en la zona muerta temporal  (TDZ).
Cuando el intérprete llega a la declaración let variable, se pasa la fase de inicialización (paso 2). Ahora se inicializa el estado variable y se evalúa su acceso undefined. La variable sale de la zona muerta temporal .
Más tarde, cuando aparece una declaración de mivariable = 'value', se pasa a la fase de asignación (paso 3).
Si JavaScript se encuentra let variable = 'value', entonces la inicialización y la asignación ocurren en una sola declaración.
Como se mencionó anteriormente, la elevación o hoisting es la declaración y la inicialización acopladas de la variable en la parte superior del alcance. Sin embargo let, el ciclo de vida desacopla las fases de declaración e inicialización. Desacoplamiento desvanece el término de elevación para let.
La brecha entre las dos fases crea la zona muerta temporal, donde no se puede acceder a la variable.
 
6. Conclusión

Declarar variables usando var es propensa a errores.
ES2015 presenta let. Utiliza un algoritmo mejorado para declarar variables y, además, tiene un alcance de bloque.
El “hoisting” no es válido para una variable let (incluidas const y  class). Antes de la inicialización, la variable está en zona muerta temporal y no es accesible.
Declara, inicializa y luego usa variables. Este flujo es correcto y fácil de seguir.
Mantén las variables lo más ocultas posible. Cuantas menos variables estén expuestas, más modular será su código.
Intentar siempre usar const con las variables.
 
7. Ejemplos

7.1 Ejemplo 1

 var foo = 1;
 
 function test() {
  console.log(foo);
 };
 test(); //1

7.2 Ejemplo 2

var foo = 1;
 
function test() {
 console.log(foo);
 var foo = 2;
};
test(); //undefined
 
 
 
 
 
7.3 Ejemplo 3

var foo = 1;
 
function test() {
 console.log(foo);
 let foo = 2;
};
test(); // ReferenceError
 
7.4 Ejemplo 4

function foo(a) {
   a();
   function a() {
      console.log("yay");
   }
}
foo(); // yay
foo( 'whatever' ); // yay
foo( function(){ console.log("bam"); } ); // yay
 
7.5 Ejemplo 5

beOnTop();
 
var beOnTop;
 
beOnTop = function() {
 console.log('second');
};
//beOnTop is not a function

7.6 Ejemplo 6

var beOnTop;
 
beOnTop = function() {
 console.log('second');
};
 
beOnTop();//second



7.7 Ejemplo 7

foo();
 
function foo() {
 console.log(1);
}
 
var foo = function() {
 console.log(2);
};
 
function foo() {
 console.log(3);
}
 
foo(); //3 2

7.8 Ejemplo 8

var x = 10;
function test()
{
console.log(x);
   var x = 20;
}
 
test();
console.log(x); //10

7.8 Ejemplo 9

function test()
{
console.log(x);
}
 
var x; 
test(); //undefined
 
 x = 3;
test(); //3
 
