/*
8 kyu

Convert boolean values to strings 'Yes' or 'No'.

https://www.codewars.com/kata/53369039d7ab3ac506000467

Description:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(boolToWord(true));
console.log(boolToWord(false));

/*
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), 'Yes')
    assert.strictEqual(boolToWord(false), 'No')
    });
  });
*/
