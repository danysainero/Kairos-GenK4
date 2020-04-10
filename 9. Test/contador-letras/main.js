export class Miclase {
  constructor() {}

  contadorLetras(texto, letra) {
    let count = 0;
    for (let item of texto) {
      if (item === letra) {
        count++;
      }
    }
    this.dummyFunction();

    return count;
  }

  dummyFunction() {
    return "Soy una función tonta";
  }
}
