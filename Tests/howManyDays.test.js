const{
  howManyDays
} = require("../Solutions/howManyDays");

describe("howManyDays", () =>{
  test("Returns error if number less than 0 or greater than 12 is passed", () => {
    expect(howManyDays(-1)).toBe("Enter a number between 1 and 12");
    expect(howManyDays(13)).toBe("Enter a number between 1 and 12");
  })

  test("Returns 30 if 4 is passed to the function", () => {
    expect(howManyDays(4)).toBe(30);
    expect(howManyDays(6)).toBe(30);
  })

  test("Returns 31 if 1, 3, 5, 7, 8, 10 or 12 is entered", () => {
    expect(howManyDays(12)).toBe(31);
    expect(howManyDays(8)).toBe(31);
  })

  test("Returns 28 if 2 is entered", () => {
    expect(howManyDays(2)).toBe(28);
  })
})
