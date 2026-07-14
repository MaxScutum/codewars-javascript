# CodeWars JavaScript Solutions

---

## Will there be enough space?

### Description

The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers..

Task Overview:
You have to write a function that accepts three parameters:

`- cap is the amount of people the bus can hold excluding the driver.`
`- on is the number of people on the bus excluding the driver.`
`- wait is the number of people waiting to get on to the bus excluding the driver.`

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

---

### Examples

```javascript
cap = 10;
on = 5;
wait = 5;

// return 0
```

All 5 waiting passengers can fit.

```javascript
cap = 100;
on = 60;
wait = 50;

// return 10
```

Only 40 free seats are available, so 10 passengers cannot get on.

---

### Given Code

```javascript
function enough(cap, on, wait) {
  // your code here
}
```

---

### Solution

```javascript
function enough(cap, on, wait) {
  if (on + wait <= cap) {
    return 0;
  } else {
    return on + wait - cap;
  }
}
```

---

### Tests

```javascript
const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5875b200d520904a04000003)
