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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // returns a truthy value
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Our map function will take in two arguments:
// An array to map
// A callback function

// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
  results.push(callback(item)); // our callback we can use to calculate any return value we want
  }
  return results;
};

// Test Cases:
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]); // returns the length of all of the array elements
assertArraysEqual(map(words, word => typeof word), ["string", "string", "string", "string", "string"]); // checks typeof value in each element
assertArraysEqual(map(words, word => word.length > 5), [true, true, false, false, false]); // returns true if length of element is larger than 5, false otherwise
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]) // returns the first letter of each element