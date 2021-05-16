const{
  grabDoll
}= require("../Solutions/grabDoll");

describe("grabDoll", () => {
  test("Returns an error if an empty array is passed", () => {
    expect(grabDoll([])).toBe("Array is empty");
  })

  test("Returns Hello Kitty if Hello Kitty is present in the array", () => {
    expect(grabDoll(["Hello Kitty"])).toStrictEqual(["Hello Kitty"]);
  })

  test("Returns Hello Kitty if Hello Kitty is present in the array", () => {
    expect(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"])).toStrictEqual(["Hello Kitty", "Hello Kitty"]);
  })

  test("Returns Hello Kitty and Barbie Doll if Hello Kitty/Barbie Doll is present in the array", () => {
    expect(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"])).toStrictEqual(["Hello Kitty","Hello Kitty","Barbie doll"]);
  })

  test("Returns Hello Kitty and Barbie Doll if Hello Kitty/Barbie Doll is present in the array", () => {
    expect(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"])).toStrictEqual(["Barbie doll","Hello Kitty","Hello Kitty"]);
  })
})
