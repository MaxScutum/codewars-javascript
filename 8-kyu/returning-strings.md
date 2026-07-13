# CodeWars JavaScript Solutions 8 kyu

---

## Returning Strings

Create a function that accepts a parameter representing a name and returns the message:

`"Hello, <name> how are you doing today?".`

[Make sure you type the exact thing I wrote or the program may not execute properly]

---

### Given Code

```javascript
function greet(name) {
  //your code here
}
```

---

### Solution

```javascript
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
```

---

### Tests

```javascript
const chai = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");

    assert.strictEqual(
      greet("Shingles"),
      "Hello, Shingles how are you doing today?",
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/55a70521798b14d4750000a4)
