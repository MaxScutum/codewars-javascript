/*

8 kyu

Function 1 - hello world

https://www.codewars.com/kata/523b4ff7adca849afe000035

Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

*/

function greet() {
  return String.fromCharCode(
    104,
    101,
    108,
    108,
    111,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
  );
}

console.log(greet());

/*
const assert = require("chai").assert;

describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});

*/
