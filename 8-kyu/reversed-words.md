# CodeWars TypeScript Solutions 8 kyu JavaScript.

---

## Reversed Words

Description:

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example:

```text
"The greatest victory is that which requires no battle"
-->
"battle no requires which that is victory greatest The"
```

---

### Given Code

```javascript
function reverseWords(str) {
  return str; // reverse those words
}
```

---

### Solution

```javascript
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
```

---

### Tests

```javascript
const chai = require("chai");
const assert = chai.assert;

describe("Sample Test Cases", function () {
  it("Should return a reversed string", function () {
    assert.equal(reverseWords("hello world!"), "world! hello");

    assert.equal(
      reverseWords("yoda doesn't speak like this"),
      "this like speak doesn't yoda",
    );

    assert.equal(reverseWords("foobar"), "foobar");

    assert.equal(reverseWords("kata editor"), "editor kata");

    assert.equal(
      reverseWords("row row row your boat"),
      "boat your row row row",
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)
