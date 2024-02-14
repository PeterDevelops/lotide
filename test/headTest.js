const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual(head([5,6,7]), 5); // Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Pass
assertEqual(head(["Labs"]), "Labs"); // Pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); //  Fail
assertEqual(head([4,6,7]), 5); // Fail
assertEqual(head([1]), 1); // Pass
assertEqual(head([]), undefined); // Pass