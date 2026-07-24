# CodeWars JavaScript Solutions 7 kyu

---

## Separate basic types

### Description

Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected

So, for this input:

```javascript
["a", 1, 2, false, "b"];
```

expected output is:

```javascript
{
  number: [1, 2],
  string: ["a", "b"],
  boolean: [false]
}
```

---

### Given Code

```javascript
function separateTypes(input) {}
```

---

### Solution

```javascript
function separateTypes(input) {
  return input.reduce((types, value) => {
    const valueType = typeof value;
    const type = types[valueType];
    types[valueType] = type ? [...type, value] : [value];
    return types;
  }, {});
}
```

---

### Tests

```javascript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("separateTypes", function () {
  it("given ['a', 1, 2, false, 'b']", function () {
    assert.deepEqual(separateTypes(["a", 1, 2, false, "b"]), {
      number: [1, 2],
      string: ["a", "b"],
      boolean: [false],
    });
  });

  it("given ['a', 1, 2 ]", function () {
    assert.deepEqual(separateTypes(["a", 1, 2]), {
      number: [1, 2],
      string: ["a"],
    });
  });
});
```
