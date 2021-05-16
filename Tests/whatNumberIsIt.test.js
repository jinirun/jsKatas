const{
  whatNumberIsIt
} = require("../Solutions/whatNumberIsIt");

describe("whatNumberIsIt", () => {
  test("Returns the number if an integer is passed", () => {
    expect(whatNumberIsIt(100)).toBe("Input number is 100");
  })

  test("Returns the message of maximum number when MAX_VALUE is passed", () => {
    expect(whatNumberIsIt(1.7976931348623157e+308)).toBe("Input number is Number.MAX_VALUE");
  })
  test("Returns the message of minimum number when MIN_VALUE is passed", () => {
    expect(whatNumberIsIt(5e-324)).toBe("Input number is Number.MIN_VALUE");
  })
  test("Returns the message of NaN when values other than a number is passed", () => {
    expect(whatNumberIsIt('Hello')).toBe("Input number is Number.NaN");
    expect(whatNumberIsIt(NaN)).toBe("Input number is Number.NaN");
  })
  test("Returns a message of Positive Infinity when POSITIVE_INFINITY is passed", () => {
    expect(whatNumberIsIt(Infinity+1)).toBe("Input number is Number.POSITIVE_INFINITY");
  })
  test("Returns a message of Negative Infinity when NEGATIVE_INFINITY is passed", () => {
    expect(whatNumberIsIt(-Number.MAX_VALUE*2)).toBe("Input number is Number.NEGATIVE_INFINITY");
  })
})
