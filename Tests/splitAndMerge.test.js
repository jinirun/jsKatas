const{
  splitAndMerge
} = require("../Solutions/splitAndMerge");

describe("splitAndMerge", () => {
  test("Returns an array of characters when a sentence is passed", () => {
    expect(splitAndMerge("My name is John"," ")).toBe("M y n a m e i s J o h n");
    expect(splitAndMerge("My name is John","-")).toBe("M-y n-a-m-e i-s J-o-h-n");
    expect(splitAndMerge("Hello World!",".")).toBe("H.e.l.l.o W.o.r.l.d.!");
    expect(splitAndMerge("Hello World!",",")).toBe("H,e,l,l,o W,o,r,l,d,!");
  })
})
