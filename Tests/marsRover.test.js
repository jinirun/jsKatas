const{
  turn
} = require("../Solutions/marsRover");

describe("turn", () => {
  test("Returns error if empty characters are sent", () => {
    expect(turn('', '')).toBe("Input cannot be empty");
  })
  test("Returns right if 'N' and 'E' are passed",() => {
    expect(turn('N','E')).toBe('right');
    expect(turn('E','S')).toBe('right');
    expect(turn('S','W')).toBe('right');
    expect(turn('W','N')).toBe('right');
  })

  test("Returns left if NW,WS,SE,EN are passed", () => {
    expect(turn('N','W')).toBe('left');
    expect(turn('W','S')).toBe('left');
    expect(turn('S','E')).toBe('left');
    expect(turn('E','N')).toBe('left');
  })
})
