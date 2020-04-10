1 El valor de this en Javascript: cómo manejarlo correctamente


This es un valor complejo en Javascript; 
This es susceptible de causar tanto comportamientos inesperados como potentes estructuras de código reutilizable.
Su valor, lejos de ser intuitivo, se determina según la forma en que se invoque a la función que lo encierra, algo que no siempre es correctamente entendido o aprovechado.

¿Qué es exactamente this?

La palabra clave this tiene en Javascript un comportamiento diferente al de otros lenguajes pero por lo general, su valor hace referencia al propietario de la función que la está invocando o en su defecto, al objeto donde dicha función es un método.

Cuando no estamos dentro de una estructura definida, esto es un objeto con métodos, el propietario de una función es siempre el contexto global. En el caso de los navegadores web, tenemos que recordar que dicho objeto es window:

console.log( this === window );  // true
 
function test(){
  console.log( this === window);
}
test(); // true

Accediendo a los valores de un objeto desde el propio objeto
Este concepto de propietario puede inducir a errores. Pensemos en un objeto con una serie de propiedades:


var myApp = {
  name : 'Megan',
  lastName : 'Fox',
  birthDate : '16/05/1986',
  isPretty : true
};
console.log( myApp.name ); // Megan
console.log( myApp.isPretty ); // true




Supongamos ahora que necesitamos otra propiedad más ‘dinámica’ que participe de los valores asignados a cualquier otra. Por ejemplo, queremos un ‘completeName‘ que concatene ‘name‘ y ‘lastName‘. Parece que este un claro ejemplo de uso para this:



var myApp = {
  name : 'Megan',
  lastName : 'Fox',
  completeName : this.name + this.lastName
}


Aunque parece coherente, cuando pasamos a comprobarlo vemos que el resultado no es el esperado:

	console.log( myApp.completeName ); // undefined

El problema aquí es que this no está apuntando al objeto como cabría esperar, sino que está buscando la referencia fuera, en el contexto global (window).

Para obtener el resultado esperado tenemos que aplicar un patrón de invocación que modifique al propietario desde el que se invoca el this…

Patrón de invocación por método

En Javascript, existen varias formas de llamar a las funciones desde nuestro código; concretamente, podemos enumerar hasta cinco diferentes.
La elección de una u otra responde al flujo de nuestro programa pero básicamente, difieren en el contexto que queramos aplicar a cada una.
O lo que es lo mismo, al valor que queramos que la función asigne a la referencia this.

En el desarrollo de aplicaciones modernas, el patrón más recurrente es el de invocación por método: una función es almacenada como propiedad de un objeto convirtiéndose así en lo que denominamos un método.

Cuando llamamos (invocamos) a un método, this hace referencia al propio objeto:



var myApp = {
  name : 'Megan',
  lastName : 'Fox',
  completeName : function(){
    return this.name + ' ' + this.lastName;
  }
}
 
console.log( myApp.completeName() ); // Megan Fox



En esta ocasión, sí podemos comprobar como this apunta al propio objeto y busca la propiedades ‘name‘ y ‘lastName‘ dentro en lugar de remontarse hasta el contexto global.

Pero como vimos en el caso anterior, no siempre el uso de this es intuitivo.
Consideremos la siguiente estructura:



var myApp = function(){
  var name = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + this.name );
  };
  sayHello(); // Invoke the function
};
 
myApp(); // Hello

¿A dónde está apuntando this en este caso? 

Como la función no es ahora la propiedad de un objeto, this apunta de nuevo al global (window). Esto es un error en el diseño del lenguaje ya que, de comportarse como se espera, this debería apuntar a la función contenedora (que no deja de ser su propietaria).

Este comportamiento lo podemos comprobar si creamos una variable global con aquel nombre por el que estamos preguntando:


var name = "Strange World";
var myApp = function(){
  var name = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + this.name );
  };
  sayHello();
};
 
myApp(); // Hello, Strange World

La consecuencia de este error es que un método no puede utilizar funciones internas que le ayuden a hacer su trabajo porque éstas, no tiene acceso a sus propiedades.

Para resolver este problema, podemos recurrir a una solución muy simple: definir dentro de nuestra función contenedora una nueva variable que cachee el valor de this para que así esté disponible desde cualquier otra función anidada que lo precise. Por convención, el nombre de esta variable es self:



var myApp = function(){
  var self = this; // Work around!
  var name = "World"
  var sayHello = function(){
    console.log( 'Hello, ' + self.name );
  };
 
  sayHello();
};
 
myApp(); // Hello, World


Sobreescribiendo el valor de this en tiempo de ejecución

Una de las características consideradas avanzadas dentro del lenguaje Javascript es la posibilidad de reescribir el valor de this en tiempo de ejecución consiguiendo así una modularidad y reusabilidad extrema.

Más arriba comentamos que existen varias formas de invocar funciones en Javascript donde la elección entre una u otra depende del valor que queramos asignar a this.

Consideremos el siguiente código:



var person1 = {
  name : 'Angelina', 
  lastName : 'Jolie',
  birthDay : '04/06/1975',
  lastMovie : 'The Tourist'
};
 
var person2 = {
  name : 'Scarlett',
  lastName : 'Johansson',
  birthDay : '22/11/1984',
  lastMovie : 'We bought a Zoo'
}
 
var printName = function(){
  console.log( this.name + ' ' + this.lastName );
}

Si tratamos de ejecutar sin más la función printName, ya sabemos que el this apunta al objeto global window e irá ahí a buscar las propiedades name y lastName.

En una arquitectura modular, lo ideal es que esa función pueda ser reaprovechada y que nos permita imprimir los datos de cualquier objeto que cumpla con los requisitos. Para ello, podemos cambiar el valor de this en tiempo de ejecución con el fin de que apunte a ese objeto en cuestión. Para ello, contamos con las funciones nativas apply y call:



printName.call( person1 ); // Angelina Jolie
printName.call( person2 ); // Scarlett Johansson
 
printName.apply( person1 ); // Angelina Jolie
printName.apply( person2 ); // Scarlett Johansson


El resultado es el mismo: hemos ejecutado la función printName dentro del contexto de cada uno de los objetos que hemos pasado como argumento.

La diferencia entre cada uno de estas funciones es que la segunda de ellas, apply, acepta un array como argumento, lo que permite una flexibilidad aún mayor a la hora de plantear código reusable.

Pensemos en una función que nos permita actualizar datos dentro de nuestros objetos:



var updatePerson = function(name, lastName, birthDay, lastMovie){
  this.name = name;
  this.lastName = lastName;
  this.birthDay = birthDay;
  this.lastMovie = lastMovie;
}
 
updatePerson( person1, 'Angelina', 'Jolie', '04/06/1975', 'Kung Fu Panda 2');


Las limitaciones de call se hacen rápidamente evidentes cuando queremos escribir código que no conoce (o no debe conocer) el número de argumentos que la función necesita.

Tomemos por ejemplo una función que siga el conocido paradigma del ‘dispatcher‘:


var dispatch = function(person, method, args){
  method.apply( person, args );
}
 
dispatch( person1, printName );
dispatch( person2, update, ['Scarlett', 'Johansson', '22/11/1982', 'The Avengers'] );


En este caso, el poder jugar con el valor de this y además asociar una serie de datos a través de un array, permite una poderosa flexibilidad a la hora de escribir código reutilizable.

Conclusión

El valor de this ha sido siempre difícil de manejar en Javascript. Las pequeñas diferencias que presenta frente a otros lenguajes así como un error en su diseño, lo hacen francamente especial. Sin embargo, esa peculiaridad, es precisamente la que permite crear un tipo de código muy versátil una vez que conocemos sus secretos.

Manejarlo correctamente es una parte esencial dentro del desarrollo de aplicaciones complejas en Javascript.
