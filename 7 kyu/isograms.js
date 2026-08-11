function isIsogram(str) {
  const letters = str.toLowerCase();

  return new Set(letters).size === letters.length;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
