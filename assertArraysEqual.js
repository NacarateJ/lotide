const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  // call the eqArrays function with the actual and expected arrays as arguments to check if they are equal.
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAIL
assertArraysEqual([], []); // PASS
assertArraysEqual([1], [1]); // PASS
assertArraysEqual([1], [2]); // FAIL
assertArraysEqual([1, 2, 3], [1, 2]); // FAIL
assertArraysEqual([1, 2], [1, 2, 3]); // FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // FAIL

module.exports = assertArraysEqual;

