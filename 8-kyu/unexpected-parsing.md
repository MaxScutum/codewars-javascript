# CodeWars JavaScript Solutions 8 kyu JavaScript.

---

## Unexpected parsing

Description:

Here is a piece of code:

```javascript
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return;
  {
    status: msg;
  }
}
```

Expected Behaviour:

The function should return an object with `"status"` as a key.

The value should be:

- `"busy"` if `isBusy` is `true`;
- `"available"` if `isBusy` is `false`.

The original code contains several bugs that need to be fixed.

---

### Given Code

```javascript
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";

  return;
  {
    status: msg;
  }
}
```

---

### Solution

```javascript
function getStatus(isBusy) {
  return { status: isBusy ? "busy" : "available" };
}
```

---

### Tests

```javascript
const chai = require("chai");
const assert = chai.assert;

chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getStatus(true).status, "busy");
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/54fdaa4a50f167b5c000005f)
