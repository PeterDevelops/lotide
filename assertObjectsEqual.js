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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

  console.log(`🛑🛑🛑 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
};
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });