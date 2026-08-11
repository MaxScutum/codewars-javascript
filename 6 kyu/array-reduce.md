# CodeWars JavaScript Solutions 6 kyu JavaScript.

---

## Array#reduce

### Description

In this kata, you must define the Array.reduce method.

_I have disabled the pre-existing reduce methods._

Here's how it works:

```javascript
[1, 2, 3].reduce(function (sum, next) {
  return sum + next;
}, 0);

// => 6
```

```javascript
["a", "b", "a"].reduce(function (obj, elem) {
  if (!obj[elem]) obj[elem] = 0;

  obj[elem] += 1;

  return obj;
}, {});

// => { a: 2, b: 1 }
```

**Summary:** The `reduce` method goes through each element of an array, applies the function to whatever the function returned last, and returns the last outcome.

On the first iteration, it should pass the `initial` value to the function, as well as the first element of the array.

If no `initial` value is passed, skip to the first element of the array.

Ruby methods should expect a lambda.

---

### Given Code

```javascript
Array.prototype.reduce = function (process, initial) {
  // ...
};
```

---

### Solution

```javascript
Array.prototype.reduce = function (process, initial) {
  const arr = this;

  let acc = initial;
  let start = 0;

  if (arguments.length < 2) {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    acc = process(acc, arr[i], i, arr);
  }

  return acc;
};
```

---

### Tests

```javascript
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      ["a", "y", "!"].reduce(function (x, y) {
        return x + y;
      }, "y"),
      "yay!",
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3)
