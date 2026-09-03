# CodeWars JavaScript Solutions 7 kyu JavaScript.

---

## Array arithmetic

Description:

Enable arithmetic operations on arrays, where the value of an array is given by the sum of its elements.

Examples:

```javascript
[1, 2, 3] +
  (4)[
    // 10

    (1, 1, 1)
  ] -
  (3)[
    // 0

    ("a", "b")
  ] +
  "c";
// "abc"
```

Due to intrinsic uncertainty of empty arrays, in this kata an empty array is treated as `0`.

For hints see:

[Object.prototype.valueOf() | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)

---

### Given Code

```javascript
// Your code
```

---

### Solution

```javascript
function arrayArithmetic(arr) {
  return arr.reduce(
    (acc, el) => acc + el,
    arr.some((el) => typeof el === "string") ? "" : 0,
  );
}

Array.prototype.valueOf = function () {
  return arrayArithmetic(this);
};

Array.prototype.toString = function () {
  return this.valueOf();
};
```

---

### Tests

```javascript
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var arr1 = [1, 2, 3];
    var arr2 = 4;
    var ans = 10;

    Test.assertEquals(arr1 + arr2, ans, "Should equal " + ans);

    arr1 = [1, 1, 1];
    arr2 = 3;
    ans = 0;

    Test.assertEquals(arr1 - arr2, ans, "Should equal " + ans);

    arr1 = ["a", "b"];
    arr2 = ["c", "d"];
    ans = "abcd";

    Test.assertEquals(arr1 + arr2, ans, "Should equal " + ans);

    arr1 = ["c", "o", "d", "e", "w", "a", "r", "s"];
    ans = "codewars";

    Test.assertEquals("" + arr1, ans, "Should equal " + ans);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/5645fda2956e462b5100005e)
