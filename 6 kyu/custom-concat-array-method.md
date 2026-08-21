# CodeWars JavaScript Solutions 6 kyu JavaScript.

---

## Custom concat() Array Method

Description:

REFERENCE: [MDN | Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

---

TL;DR

Create a `customConcat()` method with the same functionality as `Array.prototype.concat()`.

---

Syntax

```javascript
var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
```

Parameter `valueN`: **Arrays and/or values** to concatenate into a new array.

If `valueN` is undefined, `concat` returns a shallow copy of the existing array on which it is called.

---

Description:

The `concat` method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument:

- the elements of that argument if the argument is an array;
- the argument itself if it is not an array.

It does not recurse into nested array arguments.

The `concat` method does not alter `this` or any of the arrays provided as arguments. Instead, it returns a shallow copy containing the combined elements.

Elements are copied as follows:

- Object references are copied into the new array. Both the original and new array refer to the same object.
- If a referenced object is modified, the changes are visible in both arrays.
- Primitive values such as strings, numbers and booleans are copied by value.

---

### Given Code

```javascript
Array.prototype.customConcat = function (element) {
  return this;
};
```

---

### Solution

```javascript
Array.prototype.customConcat = function (...args) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
  }

  for (let j = 0; j < args.length; j++) {
    const arg = args[j];

    if (Array.isArray(arg) || (arg && arg[Symbol.isConcatSpreadable])) {
      for (let k = 0; k < arg.length; k++) {
        result.push(arg[k]);
      }
    } else {
      result.push(arg);
    }
  }

  return result;
};
```

---

### Tests

```javascript
describe("Basic Tests", () => {
  it("should return shallow copy of array on which it was called if passed no arguments", () => {
    let a = [1, 2, 3];
    let b = a.customConcat();

    Test.assertDeepEquals(a, b);
    Test.assertNotEquals(a, b);

    a = [[0, 1], 2, 3];
    b = a.customConcat();

    Test.assertDeepEquals(a, b);
    Test.assertNotEquals(a, b);
    Test.assertEquals(a[0], b[0], "should copy the reference, not the value");

    a = [1, 2, { value: 3 }];
    b = a.customConcat();

    Test.assertDeepEquals(a, b);
    Test.assertNotEquals(a, b);
    Test.assertEquals(a[2], b[2], "should copy the reference, not the value");

    a[0] = "changed";

    Test.assertNotEquals(a[0], b[0], "should copy value, not reference");

    a[2].value = "changed";

    Test.assertDeepEquals(
      b[2],
      { value: "changed" },
      "should copy the reference, not the value",
    );
  });

  it("should return a new array, shallow copying contents of original arrays", function () {
    let a = [1, 2, { value: 3 }, [4]];
    let b = [5, 6, { value: 7 }, [8]];
    let c = a.customConcat(b);

    Test.assertEquals(a[2], c[2]);
    Test.assertEquals(a[3], c[3]);
    Test.assertEquals(b[2], c[6]);
    Test.assertEquals(b[3], c[7]);

    Test.assertDeepEquals(a, [1, 2, { value: 3 }, [4]]);

    Test.assertDeepEquals(b, [5, 6, { value: 7 }, [8]]);

    Test.assertDeepEquals(c, [
      1,
      2,
      { value: 3 },
      [4],
      5,
      6,
      { value: 7 },
      [8],
    ]);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/583579afe0c61a774a0000ba)
