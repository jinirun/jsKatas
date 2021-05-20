const{
  firstToLast
} = require("../Solutions/firstToLast");

describe("firstToLast", () => {
  test("Returns the position of the character in the given string", () => {
    expect(firstToLast("ababc","a")).toBe(2);
    expect(firstToLast("ababc","c")).toBe(0);
    expect(firstToLast("ababc","d")).toBe(-1);
  })
})
