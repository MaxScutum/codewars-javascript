Array.prototype.map = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const array = this;
  let result = new Array(array.length);
  for (let i = 0; i <= array.length - 1; i++) {
    if (array.hasOwnProperty(i)) {
      result[i] = callback.call(thisArg, array[i], i, array);
    }
  }
  return result;
};

console.log([1, 2, 3].map((x) => x ** 2));
console.log([1, 2, 3].map((x) => 2 * x));
console.log([1, 2, 3].map((x) => x + 1));
console.log([1, 2, 3].map((x) => x - 1));
console.log([1, 2, 3].map((x) => x * x));
console.log([1, 2, 3].map((x) => x / x));
console.log([1, 2, 3].map((x) => x % x));
console.log([1, 2, 3].map((x) => x ** x));
console.log([1, 2, 3].map((x) => x % x));
console.log([1, 2, 3].map((x) => x % x));
