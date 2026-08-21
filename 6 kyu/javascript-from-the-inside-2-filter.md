# CodeWars JavaScript Solutions 6 kyu JavaScript.

---

## Javascript from the Inside #2: Filter

Description:
Previously: [Map](http://www.codewars.com/kata/558ccca75f511f2b0d0000f7)
Your Task:
Implement our beloved [`Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) from scratch.

Example of Filter:

```javascript
var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var lower_than_six = (x) => x < 6;
var one_to_five = one_to_nine.filter(lower_than_six);

// Expected
[1, 2, 3, 4, 5];
```

Not allowed:

- `Array.prototype.filter`
- `Array.prototype.forEach`
  - I can't disable `forEach` since `console.log` needs it and the Test Cases require `console.log` implicitly, but please don't use it since `forEach` does most of the work.
- `Array.prototype.reduce/reduceRight`

What do I want?
[I want you](https://upload.wikimedia.org/wikipedia/commons/c/c0/I_want_you.jpg) to create this basic, yet really important algorithm from scratch by yourself.

The Basics:

- `Array.prototype.filter` is a function that takes a **predicate function** and an **object as a context**.
- The **predicate function** receives the **current item**, the **index** and the **array itself**.
- The **context** will be `this` inside the **predicate function**.

Note:

As always, take into account that an array built with `[]` and `new Array(elem1, elem2...)` is different in content than a `new Array(length)`.

```javascript
[1, 2];
// { '0': 1, '1': 2, length: 2 }

new Array(1, 2);
// { '0': 1, '1': 2, length: 2 }

new Array(2);
// { length: 2 }

[1, 2].push(3);
// { '0': 1, '1': 2, '2': 3, length: 3 }

new Array(1, 2).push(3);
// { '0': 1, '1': 2, '2': 3, length: 3 }

new Array(2).push(3);
// { '2': 3, length: 3 }
```

That said, Happy Coding!

Another Note:

Your implementation should not modify the current array:

```javascript
var base_array = [1, 2, 3, 4, 5];

var mapped_array = base_array.filter(function (item) {
  return item < 3;
});

console.log(base_array);
// [1, 2, 3, 4, 5]

console.log(mapped_array);
// [1, 2]
```

---

### Given Code

```javascript
/* Your code goes here */
```

---

### Solution

```javascript
Array.prototype.filter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  const array = this;
  const result = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (i in array) {
      const value = array[i];

      const shouldKeep = callback.call(thisArg, value, i, array);

      if (shouldKeep) {
        result.push(value);
      }
    }
  }

  return result;
};
```

---

### Tests

```javascript
describe("Javascript from the Inside: Filter", function () {
  let base_array, empty_array, single_array;

  before(function () {
    empty_array = [];
    single_array = [1];
    base_array = [1, 2, 3, 4, 5];
  });

  it("should filter", function () {
    let filtered_array = base_array.filter((x) => x == 1);
    Test.assertSimilar(
      filtered_array,
      [1],
      "Oh no! It didn't filter appropriately.",
    );
  });

  it("should work with empty arrays", function () {
    let filtered_empty_array = empty_array.filter((x) => true);
    Test.assertSimilar(
      filtered_empty_array,
      empty_array,
      "Oh no! It didn't filter appropriately an empty array.",
    );
  });

  it("should work with single-elemented arrays", function () {
    let filtered_single_array = single_array.filter((x) => true);
    Test.assertSimilar(
      filtered_single_array,
      single_array,
      "Oh no! It didn't filter appropriately a single-elemented array.",
    );
  });

  it("should not modify the base array", function () {
    let filtered_array = base_array.filter((x) => x < 5);
    Test.assertSimilar(
      base_array,
      [1, 2, 3, 4, 5],
      "Oh no! Apparently your solution modifies the base array.",
    );
  });

  it("should handle predicate's current value", function () {
    let even_numbers = base_array.filter((x) => x % 2 == 0);
    Test.assertSimilar(
      even_numbers,
      [2, 4],
      "Oh no! It didn't return only the even numbers!",
    );

    let odd_numbers = base_array.filter((x) => x % 2 != 0);
    Test.assertSimilar(
      odd_numbers,
      [1, 3, 5],
      "Oh no! It didn't return only the odd numbers!",
    );
  });

  it("should handhe predicate's current index", function () {
    let first_two = base_array.filter((_, i) => i <= 1);
    Test.assertSimilar(
      first_two,
      [1, 2],
      "Oh no! It didn't return only the first two items",
    );

    let center = base_array.filter((_, i) => i == 2);
    Test.assertSimilar(
      center,
      [3],
      "Oh no! It didn't return only the item in the center",
    );

    let last_two = base_array.filter((_, i) => i >= 3);
    Test.assertSimilar(
      last_two,
      [4, 5],
      "Oh no! It didn't return only the last two items",
    );
  });

  it("should handle predicate's origin array", function () {
    let first_from_orig = base_array.filter(
      (_, i, orig) => orig.filter((__, ii) => ii % i < 2).length == 0,
    );
    Test.assertSimilar(
      first_from_orig,
      [1],
      "Oh no! It didn't properly filter using 'origin'",
    );

    let skip_first_from_orig = base_array.filter((_, i, orig) => orig[i - 1]);
    Test.assertSimilar(
      skip_first_from_orig,
      [2, 3, 4, 5],
      "Oh no! It didn't properly filter using 'origin'",
    );
  });

  it("should only process array up to original length", function () {
    let filtered = base_array.filter(
      function (x, i, a) {
        a.push(x);
        return this[i] == i;
      },
      [0, 1, 2, 3, 4],
    );
    Test.assertSimilar(
      filtered,
      [1, 2, 3, 4, 5],
      "Oh no! It looks like your solution allows for the predicate to the base array",
    );
  });

  it("should properly handle filter's context", function () {
    let sum_is_even = base_array.filter(function (x) {
      return (x + this) % 2 == 0;
    }, 2);
    Test.assertSimilar(
      sum_is_even,
      [2, 4],
      "Oh no! The callback received the wrong context!",
    );

    let context_is_double = base_array.filter(
      function (x, i) {
        return this[i] == 2 * x;
      },
      [0, 4, 6, 0, 10],
    );
    Test.assertSimilar(
      context_is_double,
      [2, 3, 5],
      "Oh no! The callback received the wrong context!",
    );
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/55afe435d2ce100356000032)
