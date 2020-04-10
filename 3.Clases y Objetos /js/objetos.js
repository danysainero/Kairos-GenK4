console.log('******************* clases y objetos herencia ***************')

//INTERFAZ: Molde general en el que sedefinen propiedades y objetos.
//CLASES: Entidades que sirven para definir el objeto 



/*********************** INTERFAZ ******************/
class Vehiculo {
    constructor (numRuedas, motor, color) {
        this.numRuedas = numRuedas;
        this.motor = motor;
        this.color = color;
    }

    arrancar() { } //Para que se considere una Interfaz tiene que tener los métodos sólo declarados.

    frenar() {}  
}

/********************** CLASES ***********************/
class Coche extends Vehiculo {
    constructor() {
        super(); // Permite usar las propriedades y/o métodos de la clase padre.
        this.numRuedas = 4
        this.dvd = true;
    }

    arrancar() {
        return "bruuuuuuuum";
    }
    
    frenar() { return "ñiiiiiiii";
    }

    radio () { //cada clase puede tener nuevos métodos
        return " Kiiiiiiiiis efeeee eeeemeeee"
    }
}

class Moto extends Vehiculo {
    constructor () {  //
    super();
    this.airbag = true;
    }
}

/********************** SUB-CLASE ***********************/
class Mercedes extends Coche {
    arrancar() {
        return  "BRUM BRUM";
    }
}



//LLAMADAS:
console.log('***************vehiculo1***');

const vehiculo1 = new Vehiculo(4, "v8", "amarillo");
console.log(vehiculo1);
console.log(vehiculo1.numRuedas);



console.log('***************coche1***');
const coche1 = new Coche(4, "v8", "amarillo");
console.log(coche1);
console.log(coche1.numRuedas); 



console.log('***************moto***');
const moto1 = new Moto(4, "v8", "amarillo");
console.log(moto1);
console.log(moto1.airbag); 


/* console.log('***************Mercedes1***');
const mercedes1 = new Mercedes(4, "v8", "amarillo");
console.log(mercedes1);
console.log(mercedes1.numRuedas);
 */