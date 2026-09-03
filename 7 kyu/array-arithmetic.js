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

const arr = [1, 2, 3, 4, 5];
console.log(arr.valueOf());
console.log(arr.toString());
