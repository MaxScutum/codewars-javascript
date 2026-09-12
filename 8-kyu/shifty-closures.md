# CodeWars JavaScript Solutions 8 kyu JavaScript.

---

## Shifty Closures

Description:

Functional closures can get overly attached. Set them straight!

Why doesn't `greetAbe()` actually greet Abe?

---

### Given Code

```javascript
let name = "Abe";

const greetAbe = () => "Hello, " + name + "!";

name = "Ben";

const greetBen = () => "Hello, " + name + "!";
```

---

### Solution

```javascript
function greetAbe() {
  const name = "Abe";
  return "Hello, " + name + "!";
}

function greetBen() {
  const name = "Ben";
  return "Hello, " + name + "!";
}
```

---

### Tests

```javascript
describe("Testing greetAbe and greetBen", () => {
  const { assert } = require("chai");

  it("Basic tests", () => {
    assert.strictEqual(greetAbe(), "Hello, Abe!", "greetAbe()");

    assert.strictEqual(greetBen(), "Hello, Ben!", "greetBen()");
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/514aa0dc21607ae236000017)
