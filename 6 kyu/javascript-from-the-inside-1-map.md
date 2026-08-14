# CodeWars JavaScript Solutions 6 kyu JavaScript.

---

## Javascript from the Inside #1 : Map

### Description

Your task is to implement our beloved [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function from scratch, and yes, it has to be inside the Array's prototype.

Don't know what a `prototype` is? [This could help you a little](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language) as well as [this kata](http://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes).

Moving on, the defaults for `Array.prototype.map`, `Array.prototype.reduce`, `Array.prototype.reduceRight` and `Array.prototype.forEach` will be banned. In other words, you'll have to create `map` from scratch.

```javascript
var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var multiply_by_two = function (x) {
  return x * 2;
};

var one_to_nine_doubled = one_to_nine.map(multiply_by_two);

// Expected:
[2, 4, 6, 8, 10, 12, 14, 16, 18];
```

### What do I want?

[I want you](https://upload.wikimedia.org/wikipedia/commons/c/c0/I_want_you.jpg) to create this basic, yet really important algorithm from scratch by yourself.

### The Basics

- `Array.prototype.map` is a function that takes a **callback function** and an **object as context**.
- The **callback function** should receive the current item, its index and the array object itself.
- The **context** will be `this` inside the **callback function**.

### Note

You should take into account that an array created by `[]` and a `new Array(length)` are entirely different in the content they possess.

A better illustration:

```javascript
[1, 2, 3];
// { '0': 1, '1': 2, '2': 3, length: 3 }

new Array(3);
// { length: 3 }

[1, 2, 3].concat([4]);
// { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }

new Array(3).concat([4]);
// { '3': 4, length: 4 }
```

You should **only** apply the **callback function** to the items that the array possesses.

That said, have a happy coding.

### Oh, I almost forgot

Your implementation of this `map` function should **not modify the current array**.

```javascript
var base_array = [1, 2, 3, 4, 5];

var mapped_array = base_array.map(function (item) {
  return item + 2;
});

console.log(base_array);
// [1, 2, 3, 4, 5]

console.log(mapped_array);
// [3, 4, 5, 6, 7]
```

---

### Given Code

```javascript
/* Your code goes here */
```

---

### Solution

```javascript
Array.prototype.map = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }

  const array = this;
  const result = new Array(array.length);

  for (let i = 0; i <= array.length - 1; i++) {
    if (array.hasOwnProperty(i)) {
      result[i] = callback.call(thisArg, array[i], i, array);
    }
  }
  return result;
};
```

---

### Tests

```javascript
describe("Javascript from the Inside: Map", function () {
  var base_array, empty_array, single_array;

  before(function () {
    empty_array = [];
    single_array = [1];
    base_array = [1, 2, 3, 4, 5];
  });

  it("should return a new array", function () {
    var mapped_to_same = base_array.map(function (x) {
      return x;
    });

    Test.assertNotEquals(
      mapped_to_same,
      base_array,
      "Oh no! I didn't return a new array.",
    );
  });

  it("should map", function () {
    var mapped_to_same = base_array.map(function (x) {
      return x;
    });

    Test.assertDeepEquals(
      mapped_to_same,
      base_array,
      "Oh no! I didn't map appropriately.",
    );
  });

  it("should work for empty arrays", function () {
    var empty_map = empty_array.map(function (x) {
      return x;
    });

    Test.assertDeepEquals(
      empty_map,
      empty_array,
      "Oh no! it didn't work for empty arrays.",
    );
  });

  it("should work for arrays with a single element", function () {
    var single_map = single_array.map(function (x) {
      return x;
    });

    Test.assertDeepEquals(
      single_map,
      single_array,
      "Oh no! it didn't work for arrays with a single element.",
    );
  });

  it("should not modify base_array", function () {
    var plus_two = base_array.map(function (item) {
      return item + 2;
    });

    Test.assertDeepEquals(base_array, [1, 2, 3, 4, 5]);
    Test.assertDeepEquals(plus_two, [3, 4, 5, 6, 7]);
  });

  it("should properly handle callback's currentValue", function () {
    var squared_array = base_array.map(function (item) {
      return item * item;
    });

    Test.assertDeepEquals(squared_array, [1, 4, 9, 16, 25]);

    var to_the_power_of_three_array = base_array.map(function (item) {
      return Math.pow(item, 3);
    });

    Test.assertDeepEquals(to_the_power_of_three_array, [1, 8, 27, 64, 125]);
  });

  it("should properly handle callback's current index", function () {
    var plus_two_and_index = base_array.map(function (item, index) {
      return item + 2 + index;
    });

    Test.assertDeepEquals(plus_two_and_index, [3, 5, 7, 9, 11]);

    var divided_by_index = base_array.map(function (item, index) {
      return item / index;
    });

    Test.assertDeepEquals(divided_by_index, [
      Infinity,
      2,
      1.5,
      1.3333333333333333,
      1.25,
    ]);

    var array_indexes = base_array.map(function (_, index) {
      return index;
    });

    Test.assertDeepEquals(array_indexes, [0, 1, 2, 3, 4]);
  });

  it("should properly handle callback's array", function () {
    var array_times_five = base_array.map(function (_, _2, array) {
      return array;
    });

    Test.assertDeepEquals(array_times_five, [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ]);

    var plus_two_from_array = base_array.map(function (_, index, array) {
      return array[index] + 2;
    });

    Test.assertDeepEquals(plus_two_from_array, [3, 4, 5, 6, 7]);
  });

  it("should properly handle context", function () {
    var sum_with_context = [1, 2, 3].map(
      function (item, index) {
        return item + this[index];
      },
      [4, 5, 6],
    );

    Test.assertDeepEquals(sum_with_context, [5, 7, 9]);
  });

  it("should properly handle callback's array when given a context", function () {
    var sum_with_context = [1, 2, 3].map(
      function (item, index, orig) {
        return item + orig[index];
      },
      [4, 5, 6],
    );

    Test.assertDeepEquals(sum_with_context, [2, 4, 6]);
  });

  it("should work with new Array constructor", function () {
    var array_of_two = new Array(2).map(function () {
      return 1;
    });

    Test.assertDeepEquals(array_of_two, [, ,]);
  });

  it("should skip the holes in new Array(length)", function () {
    var array_of_two_and_one = new Array(2).concat([null]).map(function () {
      return 1;
    });

    Test.assertDeepEquals(array_of_two_and_one, [, , 1]);
  });
});
```

---

[See on CodeWars.com](https://www.codewars.com/kata/558ccca75f511f2b0d0000f7)
