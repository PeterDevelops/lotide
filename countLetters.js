// Compares 2 value 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// console.log(countLetters("lighthouse in the house"));
// console.log(countLetters("LHL"));
// console.log(countLetters("lighthouse"));

const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1); // true 
assertEqual(result["h"], 4); // true
assertEqual(JSON.stringify(countLetters("lighthouse in the house")), JSON.stringify({l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,})); // pass
assertEqual(JSON.stringify(countLetters("lighthouse")), JSON.stringify({l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1})); // pass
assertEqual(JSON.stringify(countLetters("LHL")), JSON.stringify({L: 2, H: 1})); // pass
assertEqual(JSON.stringify(countLetters("lighthouse")), JSON.stringify({l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1})); // fail
assertEqual(JSON.stringify(countLetters("LHL")), JSON.stringify({L: 1, H: 1})); // fail