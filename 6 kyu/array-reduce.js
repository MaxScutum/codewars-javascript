export default function (process, initial) {
  const arr = this;

  let acc = initial;
  let start = 0;

  if (arguments.length < 2) {
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    acc = process(acc, arr[i], i, arr);
  }

  return acc;
}
