// Compares 2 value 
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Pass
assertEqual(1, 1); // Pass
assertEqual(1, 2); // Fail
assertEqual("😱", "😱"); // Pass
assertEqual("😱", "🤓"); // Fail