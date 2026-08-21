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

// test cases
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
