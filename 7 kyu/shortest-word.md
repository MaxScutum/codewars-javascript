# CodeWars JavaScript Solutions 7 kyu JavaScript.

---

## Shortest Word

Description:

Simple, given a string of words, return the length of the shortest word(s).

The string will never be empty and you do not need to account for different data types.

---

### Given Code

```javascript
function findShort(s) {}
```

---

### Solution

```javascript
function findShort(s) {
  const words = s.split(" ");
  let minWord = words[0].length;
  for (let i = 0; i <= words.length - 1; i++) {
    if (words[i].length < minWord) {
      minWord = words[i].length;
    }
  }
  return minWord;
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
    assert.strictEqual(
      findShort("bitcoin take over the world maybe who knows perhaps"),
      3,
    );

    assert.strictEqual(
      findShort(
        "turns out random test cases are easier than writing out basic ones",
      ),
      3,
    );

    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)
