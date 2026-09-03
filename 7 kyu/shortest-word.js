function findShort(s) {
  const words = s.split(" ");
  let minWord = words[0].length;
  for (let i = 0; i <= words.length - 1; i++) {
    if (words[i].length < minWord) {
      minWord = words[i].length;
    }
  }
  return minWord;
}
