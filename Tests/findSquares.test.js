const{
  findSquares
} = require("../Solutions/findSquares");

describe("findSquares", () => {
  test("Returns an error if 0 is passed", () => {
    expect(findSquares(0,0)).toBe("Input should be greater than zero");
    expect(findSquares(0,2)).toBe(("Input should be greater than zero"));
    expect(findSquares(4, 0)).toBe("Input should be greater than zero");
    expect(findSquares(-1, 3)).toBe("Input should be greater than zero");
    expect(findSquares(5, -3)).toBe("Input should be greater than zero");
  })

  test("Returns an error if the first input is less than the second input", () => {
    expect(findSquares(2, 3)).toBe("First input should be greater than the second input");
  })

  test("Return number of 1*1 squares for the given 2 numbers", () => {
    expect(findSquares(3, 2)).toBe(6);
  })
})
