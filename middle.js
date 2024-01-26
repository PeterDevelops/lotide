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

// Uses the truthy value of eqArrays to determine if the assertion passes or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // returns a truthy value
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[Math.round(arr.length / 2) - 1], arr[Math.round(arr.length / 2)]];
  } else if (arr.length % 2 !== 0) {
    return [arr[Math.round(arr.length / 2) - 1]];
  }
};

assertArraysEqual((middle([1])), []) // => []
assertArraysEqual((middle([1, 2])), []) // => []
assertArraysEqual((middle([1, 2, 3])), [2]) // => [2]
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]) // => [3]
assertArraysEqual((middle([1, 2, 3, 4])), [2,3]) // => [2, 3]
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3,4]) // => [3, 4]