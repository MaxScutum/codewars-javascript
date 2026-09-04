# CodeWars JavaScript Solutions 8 kyu JavaScript.

---

## Removing Elements

Description:

Take an array and remove every second element from the array.

Always keep the first element and start removing with the next element.

Examples:

```javascript
["Hello", "Goodbye", "Hello Again"][
  // ["Hello", "Hello Again"]

  (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
];
// [1, 3, 5, 7, 9]
```

---

### Given Code

```javascript
function removeEveryOther(arr) {
  // your code here
}
```

---

### Solution

```javascript
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i <= arr.length - 1; i += 2) {
    result.push(arr[i]);
  }

  return result;
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
    assert.deepEqual(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
      "Hello",
      "Hello Again",
    ]);

    assert.deepEqual(
      removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [1, 3, 5, 7, 9],
    );

    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);

    assert.deepEqual(removeEveryOther([["Goodbye"], { Great: "Job" }]), [
      ["Goodbye"],
    ]);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5769b3802ae6f8e4890009d2)
