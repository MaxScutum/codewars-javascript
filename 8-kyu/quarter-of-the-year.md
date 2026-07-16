# CodeWars JavaScript Solutions 8 kyu

---

## Quarter of the year

### Description

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

```text
1 <= month <= 12
```

---

### Given Code

```javascript
const quarterOf = (month) => {
  // Your code here
};
```

---

### Solution

```javascript
const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};
```

---

### Tests

```javascript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1);
    assert.strictEqual(quarterOf(8), 3);
    assert.strictEqual(quarterOf(11), 4);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5ce9c1000bab0b001134f5af)
