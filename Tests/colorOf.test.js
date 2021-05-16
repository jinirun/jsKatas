const {
  colorOf
} = require("../Solutions/colorOf");

describe("colorOf", () => {
  test("Returns an error message if negative numbers are passed", () => {
    expect(colorOf(-1, 0, -2)).toBe("Please enter a number between 0 and 255");
    expect(colorOf(260, 4, 700)).toBe("Please enter a number between 0 and 255")
  })
  test("Returns a hexadecimal number if a decimal is passed", () => {
    expect(colorOf(255,0,0)).toBe("#ff0000");
    expect(colorOf(0,111,0)).toBe( "#006f00");
    expect(colorOf(1, 2 ,3)).toBe( "#010203");
    expect(colorOf(15, 254 ,185)).toBe( "#0ffeb9");
    expect(colorOf(95, 163 ,13)).toBe( "#5fa30d");
  })
})
