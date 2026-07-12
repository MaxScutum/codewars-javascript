/*
8 kyu

Find the smallest integer in the array

https://www.codewars.com/kata/55a2d7ebe362935a210000b2


Description:

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

function findSmallestInt(arr) {
  let number = 0;
  number = Math.min.apply(null, arr);
  console.log(number);
  return number;
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
// Output: 8
console.log(findSmallestInt([78, 56, 232, 12, 18]));
// Output: 12
console.log(findSmallestInt([78, 56, 232, 412, 228]));
// Output: 56
console.log(findSmallestInt([78, 56, 232, 12, 0]));
// Output: 0
console.log(findSmallestInt([1, 56, 232, 12, 8]));
// Output: 1

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Smallest Integer Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
    assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
    assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
    assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
    assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);
  });
});
*/
