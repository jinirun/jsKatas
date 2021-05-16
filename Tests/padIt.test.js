const{
  padIt
} = require("../Solutions/padIt");

describe("padIt", () => {
  test("Returns the input string if n=0", () => {
    expect(padIt("Mohit", 0)).toBe("Mohit");
  })

  test("Returns an error if a negative string is passed", () => {
    expect(padIt("Mohit", -1)).toBe("Please enter a positive number");
  })

  test("Returns a * padded to the left side of the string if 1 is enetered", () => {
    expect(padIt("Mohit", 1)).toBe("*Mohit");
  })

  test("Returns a star on either side of string if 2 is passed", ()=> {
    expect(padIt("Mohit", 2)).toBe("*Mohit*");
  })

  test("Returns a star on the left of string if an odd number is passed", () => {
    expect(padIt("Mohit", 5)).toBe("***Mohit**");
  })

  test("Returns a star on right side of string if an even number is passed", () => {
    expect(padIt("Mohit", 6)).toBe("***Mohit***");
  })
})
