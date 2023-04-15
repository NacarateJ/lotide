const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// test assertions
assertArraysEqual(middle([1]), []); // should return []
assertArraysEqual(middle([1, 2]), []); // should return []
assertArraysEqual(middle([1, 2, 3]), [2]); // should return [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should return [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should return [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should return [3, 4]