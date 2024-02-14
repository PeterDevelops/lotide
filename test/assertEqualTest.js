const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Pass
assertEqual(1, 1); // Pass
assertEqual(1, 2); // Fail
assertEqual("😱", "😱"); // Pass
assertEqual("😱", "🤓"); // Fail
