const{
  pickIt
}= require("../Solutions/pickIt");

describe("pickIt", () => {
  test("Returns an error message if an empty array is passed", () => {
    expect(pickIt([])).toBe("Array is empty");
  })

  test("Returns an array of odd numbers if the array has odd number of integers", () => {
    expect(pickIt([1])).toStrictEqual([[1],[]]);
    expect(pickIt([1,3])).toStrictEqual([[1,3],[]]);

  } )
  test("Returns an even array populated if only even numbers are passed", () => {
    expect(pickIt([10,20,30])).toStrictEqual([[],[10,20,30]]);
  })
  test("Returns odd and even arrays populated", () => {
    expect(pickIt([8,1,5,4,6,1,1])).toStrictEqual([[1,5,1,1],[8,4,6]]);
  })
})

