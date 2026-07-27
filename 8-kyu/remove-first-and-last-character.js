function removeChar(str) {
  const arr = str.split("");
  arr.shift();
  arr.pop();
  return arr.join("");
}

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ok"));
console.log(removeChar("codewars"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
console.log(removeChar("ok"));
console.log(removeChar("codewars"));
