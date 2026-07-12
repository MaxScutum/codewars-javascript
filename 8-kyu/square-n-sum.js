/*

8 kyu

Square(n) Sum

https://www.codewars.com/kata/515e271a311df0350d00000f

Description:

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
             
*/

function squareSum(numbers) {
  let sum = 0;

  for (let i = 0; i <= numbers.length - 1; i++) {
    let square = numbers[i] ** 2;
    console.log("Square of element:", square);

    sum += square;
    console.log("Sum now:", sum);
  }
  console.log("Final sum:", sum);
  return sum;
}

console.log(squareSum([1, 2, 2]));
// Output: 9
console.log(squareSum([0, 3, 4, 5]));
// Output: 50

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});
*/
