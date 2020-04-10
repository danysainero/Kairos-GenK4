import { Miclase } from "./contador-letras";

describe("contadorLetras", () => {

   test("largo del string correcto", () => {
    expect(contadorLetras("hola", "a")).toEqual(1);
  });

  test("largo del string incorrecto", () => {
    expect(contadorLetras("hola", "a")).not.toEqual(2);
  });

  test("revisar que la longitud del primer argumento no pueda ser mayor de 10 y el segundo mayor de 1", () => {
    const myMock = jest.fn();
    myMock("hola", "a");
       
    expect(myMock.mock.calls[0][0].length).toBeLessThanOrEqual(10); 
    expect(myMock.mock.calls[0][1].length).toEqual(1); 
  });

  test(" dummyFunction contiene tonta en la respuesta", () => {
    expect(dummyFunction()).toMatch(/tonta/);
  });

  //De que sirve esto??? si lo tengo que mockear todo.....
  test("Numero de parámetros === 2", () => {
    const myMock = jest.fn();
    myMock("hola", "a"); 
    myMock('hola', 'a');
    expect(myMock.calls[0].length).toEqual(2);
  }); 

  //En ES6, si un módulo es exportado sin clase u objeto, una función dentro de otra no puede ser mockeada
  test("dummyFunction es llamada ", () => {
    const minuevaclase = new Miclase()
    const dummyFunctionSpy = spyOn(minuevaclase, 'dummyFunction');
    minuevaclase.contadorLetras('hola', 'a');
    expect(dummyFunctionSpy).toHaveBeenCalled();
  });

});
