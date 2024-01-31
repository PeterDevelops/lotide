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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { // checks lengths of the keys
    for (const key of Object.keys(object1)) {
      if (object2[key]) { // checks if object2 has that key property

        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // checks if object1[key], and object2[key] are arrays
            if (!eqArrays(object1[key], object2[key])) {
              return false;
            }
          }
        else if (object1[key] !== object2[key]) { // checking if value of object1 is not the same as the value in object2
          return false;
        }

      } else {
        return false; // returns false if object2[key] does not exist in object2
      }
    }
    return true; // if our object passes through the loop return true
  }
  return false; // if length is too long it will return false
};

// Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // Pass, objects are the same
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: 2 }); // Fail, objects are different value
assertObjectsEqual({ a: 2, b: [1, 2] }, { b: [1, 2], a: 2 }); // Pass
assertObjectsEqual({ a: 2, b: [1, 1] }, { b: [1, 2], a: 2 }); // Fail. b: has different value
assertObjectsEqual({ a: 2, b: [1, 2, 3] }, { b: [1, 2, 3, 4], a: 2 }); // Fail. b: has longer length