# CodeWars JavaScript Solutions 7 kyu JavaScript.

---

## Array Mappings

Description

Array Mappings

Oh no, the `map` method for arrays has been disabled. Can you fix it?

In case you haven't come across the `map` method for arrays, here is how it works:

```javascript
((((([1, 2, 3].map((x) => x ** 2) ===
  [1, 4, 9][(1, 2, 3)].map((x) => 2 * x)) ===
  [2, 4, 6][(1, 2, 3)].map((x) => 2 ** x)) ===
  [2, 4, 8][(1, 2, 3)].map((x) => x.toString())) ===
  ["1", "2", "3"][("1", "2", "3")].map((x) => parseInt(x))) ===
  [1, 2, 3][("random", "array", "to", "be", "mapped")].map((x) =>
    mapping(x),
  )) ===
  [
    mapping("random"),
    mapping("array"),
    mapping("to"),
    mapping("be"),
    mapping("mapped"),
  ];
```

The `map` method does not mutate the original array.

---

### Given Code

```javascript
// Go fix it :D
```

---

### Solution

```javascript
Array.prototype.map = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const array = this;
  let result = new Array(array.length);
  for (let i = 0; i <= array.length - 1; i++) {
    if (array.hasOwnProperty(i)) {
      result[i] = callback.call(thisArg, array[i], i, array);
    }
  }
  return result;
};
```

---

### Tests

```javascript
const chai = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe("Mapping for arrays", () => {
  it("should work for the examples shown in the description", () => {
    assert.deepEqual(
      [1, 2, 3].map((x) => x ** 2),
      [1, 4, 9],
    );

    assert.deepEqual(
      [1, 2, 3].map((x) => 2 * x),
      [2, 4, 6],
    );

    assert.deepEqual(
      [1, 2, 3].map((x) => 2 ** x),
      [2, 4, 8],
    );

    assert.deepEqual(
      [1, 2, 3].map((x) => x.toString()),
      ["1", "2", "3"],
    );

    assert.deepEqual(
      ["1", "2", "3"].map((x) => parseInt(x)),
      [1, 2, 3],
    );
  });

  it("should work for my own custom test cases", () => {
    // Add your own test cases here
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/56e20642ddeb0f4fac000344)
