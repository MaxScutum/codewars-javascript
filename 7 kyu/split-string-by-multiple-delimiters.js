function multipleSplit(string, delimiters = []) {
  if (string === "") return [];
  if (delimiters.length === 0) return [string];

  const delimiterSet = new Set(delimiters);
  const token = [];
  let currentString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (delimiterSet.has(char)) {
      if (currentString !== "") {
        token.push(currentString);
        currentString = "";
      }
    } else {
      currentString += char;
    }
  }

  if (currentString !== "") {
    token.push(currentString);
  }

  return token;
}

console.log(multipleSplit("Hi everybody!", [" ", "!"])); // ["Hi", "everybody"]
console.log(multipleSplit("(1+2)*3", ["+", "*", "(", ")"])); // ["1", "2", "3"]
console.log(
  multipleSplit("60x60/(60+60+60+60)", ["+", "-", "*", "/", "(", ")"]),
); // ["60x60", "60", "60", "60", "60"]
console.log(multipleSplit("(1+2)*6-3^9", ["+", "-", "(", ")", "^", "*"])); // ["1", "2", "6", "3", "9"]
console.log(
  multipleSplit("Solve_this|kata-very\\quickly!", ["!", "|", "\\", "_", "-"]),
); // ["Solve", "this", "kata", "very", "quickly"]
console.log(multipleSplit("", ["+", "-"])); // []
console.log(multipleSplit("hello", [])); // ["hello"]
