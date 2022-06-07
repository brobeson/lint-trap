const idx = require("../index.js")

describe("A suite", function() {
  //it("contains spec with an expectation", function() {
  //  expect(true).toBe(true);
  //});
  it("can load a results file", function() {
    expect(idx.load_results("results.json")).not.toBe(null);
  });
});
