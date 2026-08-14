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
