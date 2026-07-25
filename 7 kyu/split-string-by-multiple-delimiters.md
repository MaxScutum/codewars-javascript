# CodeWars JavaScript Solutions 7 kyu JavaScript.

---

## Split string by multiple delimiters

### Description

Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

Example:

```javascript
multipleSplit("Hi everybody!", [" ", "!"]); // -> ["Hi", "everybody"]
multipleSplit("(1+2)*3", ["+", "*", "(", ")"]); // -> ["1", "2", "3"]
```

List of delimiters is optional and can be empty, so take that into account.

Important note: Result cannot contain empty string.

---

### Given Code

```javascript
function multipleSplit(string, delimiters = []) {
  "Your function goes here!";
}
```

---

### Solution

```javascript
function multipleSplit(string, delimiters = []) {
  if (string === "") return [];
  if (delimiters.length === 0) return [string];

  const delimiterSet = new Set(delimiters);
  const token = [];
  let currentString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (delimiterSet.has(char)) {
      if (currentString !== "") {
        token.push(currentString);
        currentString = "";
      }
    } else {
      currentString += char;
    }
  }

  if (currentString !== "") {
    token.push(currentString);
  }

  return token;
}
```

---

### Tests

```javascript
const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("should test for something", function () {
    Test.assertSimilar(multipleSplit("Hi everybody!", [" ", "!"]), [
      "Hi",
      "everybody",
    ]);
    Test.assertSimilar(
      multipleSplit("(1+2)*6-3^9", ["+", "-", "(", ")", "^", "*"]),
      ["1", "2", "6", "3", "9"],
    );
    Test.assertSimilar(
      multipleSplit("Solve_this|kata-very\\quickly!", [
        "!",
        "|",
        "\\",
        "_",
        "-",
      ]),
      ["Solve", "this", "kata", "very", "quickly"],
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/575690ee34a34efb37001796)
