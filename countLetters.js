// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

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