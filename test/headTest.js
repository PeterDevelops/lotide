const assert = require('chai').assert;
const head = require("../head");

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  })

  it("returns 'hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
  });

  it("returns '5' for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5)
  });

  it("returns 'Labs' for ['Labs']", () => {
    assert.strictEqual(head(["Labs"]), "Labs")
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
  });

  it("returns 4 for [4, 6 ,7]", () => {
    assert.strictEqual(head([4, 6 ,7]), 4)
  });

  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1)
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined)
  });

});