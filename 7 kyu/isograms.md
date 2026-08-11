# CodeWars JavaScript Solutions 7 kyu JavaScript.

---

## Isograms

Description:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output):

```text
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false
```

---

### Given Code

```javascript
function isIsogram(str) {
  //...
}
```

---

### Solution #1

```javascript
function isIsogram(str) {
  const letters = str.toLowerCase();

  return new Set(letters).size === letters.length;
}
```

---

### Solution #2

```javascript
function isIsogram(str) {
  const counts = {};
  str = str.toLowerCase();
  for (let char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  for (let key in counts) {
    if (counts[key] > 1) {
      return false;
    }
  }
  return true;
}
```

---

### Tests

```javascript
const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("isIsogram", function () {
  it("Sample tests", function () {
    tester("Dermatoglyphics", true);
    tester("isogram", true);
    tester("aba", false);
    tester("moOse", false);
    tester("isIsogram", false);
    tester("", true);
  });
  const tester = (input, expected) => {
    assert.strictEqual(
      isIsogram(input),
      expected,
      `Failed for input: "${input}"\n`,
    );
  };
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/54ba84be607a92aa900000f1)
