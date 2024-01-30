// Checks if the 2 arrays lengths are the same and compares their primitive values
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // returns a truthy value
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places
// in the string that it shows up.

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
    }
  }
}
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]); // e is in index 1. Should return true
assertArraysEqual(letterPositions("hello").l, [2,3]); // l is in index 2,3. Should return true
assertArraysEqual(letterPositions("hello").o, [4]); // o is in index 4. Should return true

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]); // h is in index 3,5,15,18. Should return true
assertArraysEqual(letterPositions("lighthouse in the house").o, [6,19]); // o is in index 6,19. Should return true
assertArraysEqual(letterPositions("lighthouse in the house").e, [9,16,22]); // e is in index 9,16,22. Should return true
/* ANSWER:
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} */