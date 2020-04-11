import { total , totalPrice, stringConcat, totalVotes} from "./reduce";

describe("describe test", () => {
  it("should return total", () => {
    expect(total([1, 2, 3])).toEqual(6);
  });

  it('should return the totalPrice', () => {
    const carrito = [
        { service: "consultoría", price: 3000 },
        { service: "desarrollo", price: 10000 },
        { service: "soporte", price: 7000 }
      ];
      expect(totalPrice).toEqual(20000)
  });

  it('should return a String from an array', () => {
      expect(stringConcat([1,2,3])).toMatch("123")
  });

  it('should return total votes', () => {
    const voters = [
        { name: "Bob", age: 30, voted: true },
        { name: "Mary", age: 31, voted: false },
        { name: "Becky", age: 43, voted: false },
        { name: "Jean", age: 19, voted: false },
        { name: "Joey", age: 41, voted: true }
      ];

    expect(totalVotes(voters)).toEqual(2)
});
});
