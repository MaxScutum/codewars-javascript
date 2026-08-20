Array.prototype.each = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  const array = this;

  for (let i = 0; i <= array.length - 1; i++) {
    if (array.hasOwnProperty(i)) {
      const souldStop = callback.call(thisArg, array[i], i, array);
      if (souldStop === true) {
        break;
      }
    }
  }
};

// test cases
const letters = ["a", "b", "c", "d", "e"];
const allowedLetters = [];
letters.each(function (letter, index) {
  // break out of the loop if we reached a letter with the value 'd'
  if (letter == "d") {
    return true;
  }
  allowedLetters.push(letter);
});
console.log(allowedLetters); // ["a", "b", "c"]
