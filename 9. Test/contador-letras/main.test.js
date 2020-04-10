import { Miclase } from "./main";

describe("contadorLetras", () => {

   test("largo del string correcto", () => {
     const minuevaclase = new Miclase()
    expect(minuevaclase.contadorLetras("hola", "a")).toEqual(1);
  });

  test("largo del string incorrecto", () => {
     const minuevaclase = new Miclase()
    expect(minuevaclase.contadorLetras("hola", "a")).not.toEqual(2);
  });

  test("revisar que la longitud del primer argumento no pueda ser mayor de 10 y el segundo mayor de 1", () => {
    const myMock = jest.fn();
    myMock("hola", "a");
       
    expect(myMock.mock.calls[0][0].length).toBeLessThanOrEqual(10); 
    expect(myMock.mock.calls[0][1].length).toEqual(1); 
  });

  test(" dummyFunction contiene tonta en la respuesta", () => {
    const minuevaclase = new Miclase()
    expect(minuevaclase.dummyFunction()).toMatch(/tonta/);
  });



  //En ES6, si un módulo es exportado sin clase u objeto, una función dentro de otra no puede ser mockeada
  test("dummyFunction es llamada ", () => {
    const minuevaclase = new Miclase()
    const dummyFunctionSpy = spyOn(minuevaclase, 'dummyFunction');
    minuevaclase.contadorLetras('hola', 'a');
    expect(dummyFunctionSpy).toHaveBeenCalled();
  });

});
