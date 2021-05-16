const{
  helloWorld
} = require("../Solutions/helloWorld");

describe("helloWorld", () =>  {
  test("To display hello world", () => {
    expect(helloWorld("Hello World!!")).toBe("Hello World");
  });
});

