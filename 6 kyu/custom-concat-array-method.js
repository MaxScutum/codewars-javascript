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

// test cases
const numbers = [1, 2, 3];
const result = numbers.customConcat(4, 5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6]
