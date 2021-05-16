const{
  howManySmaller
} = require("../Solutions/howManySmaller");

describe("howManySmaller", () => {
  test("Returns a count of numbers smaller than input decimal number", () => {
    expect(howManySmaller([1.234,1.235,1.228],1.24)).toBe(2);
    expect(howManySmaller([1.1888,1.1868,1.1838],1.19)).toBe(1);
  })
})
