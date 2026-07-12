/*

8 kyu

Convert a Number to a String!

https://www.codewars.com/kata/5265326f5fda8eb1160004c8

Description:

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

*/

function numberToString(num) {
  return num.toString();
}

console.log(numberToString(67));
console.log(numberToString(999));
console.log(numberToString(-100));

/*
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
*/
