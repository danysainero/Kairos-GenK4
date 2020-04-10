/****************** diferencia hoisting entre variables y objetos ****************/
console.log('******************* diferencia hoisting entre variables y objetos ***************')


var a = 5;
var b = a;

console.log(a,b);  // 5 5
a = 6
console.log(a,b);  // 6 5 

// b sigue valiendo 5 porque crea una copia del valor cuando lo lee, en este caso es 5. Al hacerse la copia da igual que
// posteriormente cambie el valor de a, ya que ya se ha hecho la copia.



var obj1 = { a : 5};
var obj2 = obj1;
console.log(obj1.a, obj2.a); // 5 5
obj1.a = 6;
console.log(obj1.a, obj2.a); // 6 6

// en el caso de los objetos, ambos apuntan al mismo sitio, serían como accesos directos distintos (no es una copia).
// así si cambia el valor de donde apuntan, también cambian, aunque no se llamen igual.



console.log('******************* objetos ***************')




