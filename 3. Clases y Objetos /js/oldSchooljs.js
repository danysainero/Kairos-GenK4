console.log('******************* Old School ***************')
/*
Antes de que se usaran las clases se hacia con funciones y la palabra prototype
*/

var Vehiculo2 = function(numRuedas, motor, color) {
    this.numRuedas = numRuedas;
    this.color = color;
}

Vehiculo2.prototype.arrancar = function(){
    return "bruuum";
}

var coche = new Vehiculo2(4, "amarillo");


console.log(coche.numRuedas); // 4
console.log(coche.arrancar()); // bruuum




Vehiculo2.prototype.arrancar = function(){  // redefinicmos function arrancar
    return "rooooooom";
}
console.log(coche.arrancar()); // rooooooom
