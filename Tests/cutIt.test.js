const{
  cutIt
} = require("../Solutions/cutIt");

describe("cutIt", () => {
  test("Returns an error when an empty string array is passed", () => {
    expect(cutIt([])).toBe("Input cannot be empty");
  })
  test("Returns a string array with strings having length of smallest string", () => {
    expect(cutIt(["ab", "cde", "fg"])).toStrictEqual(["ab", "cd", "fg"]);
    expect(cutIt(["abc","defgh","ijklmn"])).toStrictEqual(["abc","def","ijk"]);
    expect(cutIt(["codewars","javascript","java"])).toStrictEqual(["code","java","java"]);
  })
})
