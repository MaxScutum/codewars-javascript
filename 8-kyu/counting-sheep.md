# CodeWars JavaScript Solutions 8 kyu

---

## Counting sheep...

Description:

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Example:

```javascript
[
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
```

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

---

### Given Code

```javascript
function countSheeps(sheep) {
  // TODO
}
```

---

### Solution

```javascript
function countSheeps(arrayOfSheep) {
  let countedSheeps = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) countedSheeps++;
  }
  return countedSheeps;
}
```

---

### Tests

```javascript
const { assert } = require("chai");

describe("Sample Tests", function () {
  const tests = [
    [[], 0],
    [[undefined], 0],
    [[null], 0],
    [[false], 0],
    [[true], 1],
    [[undefined, null, false, true], 1],
    [[undefined, null, false, true, true, false, null, undefined], 2],
    [
      [
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ],
      17,
    ],
  ];

  for (let [sheep, expected] of tests) {
    it(`${stringify(sheep)}`, function () {
      assert.strictEqual(countSheeps(sheep), expected);
    });
  }

  function stringify(sheep) {
    return `[${sheep.map(String).join(",")}]`;
  }
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/54edbc7200b811e956000556)
