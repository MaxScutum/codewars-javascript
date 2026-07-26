function separateTypes(input) {
  return input.reduce((types, value) => {
    const valueType = typeof value;
    const type = types[valueType];
    types[valueType] = type ? [...type, value] : [value];
    return types;
  }, {});
}

console.log(separateTypes([1, "2", 3, null, false])); // { number: [1, 3], string: ["2"], null: [null], boolean: [false] }
console.log(separateTypes(["a", "b", "c"])); // { string: ["a", "b", "c"] }
console.log(separateTypes([1, [2], "3", null, false])); // { number: [1], array: [2], string: ["3"], null: [null], boolean: [false] }
console.log(separateTypes([1, [2], "3", null, false])); // { number: [1], array: [2], string: ["3"], null: [null], boolean: [false] }
