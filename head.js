// Compares 2 value 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// An array with only one element should still yield that one element as its head
// An empty array should yield undefined as its head

const head = function (arr) {
    return arr[0];
};

assertEqual(head([5,6,7]), 5); // Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Pass
assertEqual(head(["Labs"]), "Labs"); // Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); //  Fail
assertEqual(head([4,6,7]), 5); // Fail
assertEqual(head([1]), 1); // Pass
assertEqual(head([]), undefined); // Pass