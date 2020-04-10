/* 
Se usa para definir un método desde fuera y que tome datos de un objeto (pero no se define en éste)
Sería parecido a crear un servicio de métodos que se aplica al objeto que quieras.
*/


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
 
var printName = function(){   //esta variable actuaría a modo de un servicio.
  console.log( this.name + ' ' + this.lastName );
}


printName.call( person1 ); // Angelina Jolie
printName.call( person2 ); // Scarlett Johansson
 
printName.apply( person1 ); // Angelina Jolie
printName.apply( person2 ); // Scarlett Johansson


/************** LLAMADA CON ARGUMENTOS ************/


const person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
}


const print2 = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}

/*   CALL

A diferencia de .bind(), este método si ejecuta la función, tal y como lo hacen nuestros ()
recibe como primer parámetro la referencia a la cual debería de enlazar o apuntar this, dentro de la función que se ejecuta, 
en este caso print(). 
*/

  print2.call(person, 'hello', 'special');



/*   APPLY

  la unica diferencia entre call() y apply(), es la manera en requerir los argumentos de la funcion,
  por ejemplo, vimos que en call, se mandaban los argumentos asi call(person, 'hello', 'special'), 
  separados por comas, pero que pasa si mis argumentos son muchos, seria conveniente poder recirbirlos en forma de lista,
  osea en forma de un array, para ello esta apply()

*/

  print2.apply(person, ['hello', 'special']);




  //****************** ¿CUÁNDO USAMOS BIND, APPLY O CALL? **********************

// 1 - cuando queremos compartir la función de un objeto para que otro la utilice pero con sus propios argumentos,

  const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
      return this.name + ' ' + this.lastname;
    }
  }
  
  const actor = {
    name: 'Clint',
    lastname: 'Eastwood'
  }
  
  const result = person.fullname.apply(actor);
  console.log(result); // Clint Eastwood



  // 2- Funciones en los que uno de los argumentos queda fijado.
  function sum(a, b) {
    return a + b;
  }
  
  const sumCopy = sum.bind(this, 2);
  
  sumCopy(3); //5

