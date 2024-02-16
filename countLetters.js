const countLetters = function(sentence) {
  const letterCount = {};
  for (const element of sentence) {
      if (element !== " ") {
        if (letterCount[element]) {
        letterCount[element] += 1;
      } else {
        letterCount[element] = 1;
    }
  }
  }
  return letterCount;
};

module.exports = countLetters;