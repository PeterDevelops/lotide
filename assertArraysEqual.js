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
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Returns true 
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // Returns false

/* For this reason, we will not be writing assertions (test code) for assertArraysEqual. That said, you can and 
should call the function below its declaration and visually ensure that the message printed to the console is accurate. */