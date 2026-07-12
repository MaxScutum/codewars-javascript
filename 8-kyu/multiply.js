/*
8 kyu

Multiply

https://www.codewars.com/kata/50654ddff44f800200000004

Description:

This code does not execute properly. Try to figure out why.

*/

function multiply(a, b) {
  return a * b;
}

console.log(multiply(1, 1));
console.log(multiply(2, 1));
console.log(multiply(2, 2));
console.log(multiply(3, 5));
console.log(multiply(5, 0));
console.log(multiply(0, 5));
console.log(multiply(0, 0));

/*
const assert = require("chai").assert;

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1,1), 1);
    assert.strictEqual(multiply(2,1), 2);
    assert.strictEqual(multiply(2,2), 4);
    assert.strictEqual(multiply(3,5), 15); 
    assert.strictEqual(multiply(5,0), 0);
    assert.strictEqual(multiply(0,5), 0);
    assert.strictEqual(multiply(0,0), 0); 
  });
});
*/
