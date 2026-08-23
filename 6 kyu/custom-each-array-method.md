# CodeWars JavaScript Solutions 6 kyu JavaScript.

---

## Custom each() Array method

Description

JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values. For this exercise you will create your own array method called 'each'. It will be similar to the forEach method, except for one difference. If the callback function returns true then the loop will stop and no additional values will be iterated.

The following shows a contrived example of how this new method would be used:

```javascript
let letters = ["a", "b", "c", "d", "e"];
let allowedLetters = [];

letters.each(function (letter, index) {
  // break out of the loop if we reached a letter with the value "d"
  if (letter == "d") {
    return true;
  }

  allowedLetters.push(letter);
});

// allowedLetters should equal ["a", "b", "c"]
```

---

### Given Code

```javascript
// extend Array so that it supports our new each() method
```

---

### Solution

```javascript
Array.prototype.each = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const array = this;

  for (let i = 0; i <= array.length - 1; i++) {
    if (array.hasOwnProperty(i)) {
      const shouldStop = callback.call(thisArg, array[i], i, array);
      if (shouldStop === true) {
        break;
      }
    }
  }
};
```

---

### Tests

```javascript
const assert = require("chai").assert;

describe("Tests", () => {
  it("test", () => {
    const letters = ["a", "b", "c", "d", "e"];
    const allowedLetters = [];
    letters.each(function (letter, index) {
      // break out of the loop if we reached a letter with the value 'd'
      if (letter == "d") {
        return true;
      }
      allowedLetters.push(letter);
    });
    assert.deepEqual(allowedLetters, ["a", "b", "c"]);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/513e7e1aee7d36073e00000d)
