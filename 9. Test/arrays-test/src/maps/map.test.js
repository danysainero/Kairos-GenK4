import { stringItUp, capitalizeNames } from "./map";

describe("contadorLetras", () => {
  it("should change the array numbers into array strings ", () => {
    const result = ["2", "5", "100"];
    const input = stringItUp([2, 5, 100]);
    expect(input).toEqual(result);
  });

  it("should return an array Capitalize words", () => {
    const result = ["John", "Jacob", "Jingleheimer", "Schmidt"];
    const input = capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
    expect(input).toEqual(result);
  });
});
