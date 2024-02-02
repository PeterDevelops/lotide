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

// It will take in two parameters as well:
// The array to work with
// The callback (which Lodash calls "predicate")

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) { // if our callback is truthy this will immediately break the loop in whatever iteration it is in
      break;
    } else {
      result.push(item);
    }
  }
  return result;
};

// Sample Test Cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); // Expected output => [ 1, 2, 5, 7, 2 ]

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); // Expected output => [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// Test Cases:
// assertArraysEqual takes the output of takeUntil and should output [1, 2, 5, 7, 2]
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
console.log('---');
// takeUntil takes in a series of substrings and returns a new array with values before ',' is truthy. assertArraysEqual compares the output of the new arrays
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
console.log('---');
// takeUntil pushes each string into the new array until the strings length is strictly equals to 2
assertArraysEqual(takeUntil(["Just", "a", "bunch", "of", "random", "strings"], x => x.length === 2), ["Just", "a", "bunch"]);
console.log('---');
// takeUntil pushes every number until it is equals to a "string"
assertArraysEqual(takeUntil([1, 2, 3, "4", 5], x => typeof x === "string"), [1, 2, 3]);