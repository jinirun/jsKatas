const{
  giveMeFive
} = require("../Solutions/giveMeFive");

describe("giveMeFive", () => {
  test("Return error if an empty object is passed", () => {
    expect(giveMeFive({})).toBe("Input cannot be empty");
  })

  test("Return an array if the length is 5", () => {
    expect(giveMeFive({Mohit : "Arun"})).toStrictEqual(["Mohit"]);
    expect(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"})).toStrictEqual(["Ihave","money","model"]);
  })
})
