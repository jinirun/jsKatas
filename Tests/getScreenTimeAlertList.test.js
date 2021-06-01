const {
  getScreenTimeAlertList
}= require("../Solutions/getScreenTimeAlertList");

describe("getScreenTimeAlertList", () => {
  test("Returns an error if the object list is empty", () => {
    expect(() => {
      getScreenTimeAlertList();
    }).toThrow("Error: Input cannot be empty");
  })

  test("Returns an array of users if input is valid", () => {
    expect(getScreenTimeAlertList([
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [{ date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
          ]
        },
        {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
          ]
        }
      ], "2019-05-02")).toEqual(["beth_1234"]);
    expect(getScreenTimeAlertList([
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [{ date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
          { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 4} },
          { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
          { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
          { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
          { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
      }
    ], "2019-05-02")).toEqual([]);
  })
})
