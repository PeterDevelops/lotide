// Compares 2 value 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key
// for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(object, callback) {
  for (const user in object) {
    console.log(object[user]);
    if (callback(object[user])) { // object[user] takes the value of the properties, in this case the values are objects
      return user;
    }
  }
  return undefined;
};

// Test Cases:
assertEqual(findKey({
   "Blue Hill": { stars: 1 },
   "Akaleri":   { stars: 3 },
   "noma":      { stars: 2 },
   "elBulli":   { stars: 3 },
   "Ora":       { stars: 4 },
   "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma");

  assertEqual(findKey({
    "Blue":   { popularity: 1 },
    "Red":    { popularity: 3 },
    "Green":  { popularity: 2 },
    "Yellow": { popularity: 3 },
    "Pink":   { popularity: 4 },
    "Orange": { popularity: 3 }
   }, x => x.popularity > 3), "Pink");

   assertEqual(findKey({
    "String1": { isItTrue: true },
    "String2": { isItTrue: true },
    "String3": { isItTrue: true },
    "String4": { isItTrue: true },
    "String5": { isItTrue: false },
    "String6": { isItTrue: true }
   }, x => x.isItTrue === false), "String5");