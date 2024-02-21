const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Returns true
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // Returns false