const eqArrays = require("./eqArrays");

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // returns a truthy value
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;