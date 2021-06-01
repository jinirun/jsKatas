const {
  getScreenTimeAlertList
}= require("../Solutions/getScreenTimeAlertList");

describe("getScreenTimealertList", () => {
  test("Returns an error if the object list is empty", () => {
    expect(() => {
      getScreenTimeAlertList();
    }).toThrow("Error: Input cannot be empty");
  })
})
