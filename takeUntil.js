// this function will take in two parameters:
// 1. The array to work with
// 2. The callback function

// The function will return a "slice of the array with elements taken from the beginning."
// It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.


const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    // if the callback returns a truthy value, the loop will terminate as soon as
    if (callback(item)) {
      break;
    }
    // otherwise it will keep pushing items into results array
    results.push(item);
  }
  return results;
};

// takes in two arrays as arguments and checks if they are equal by comparing their lengths and the values
// at each index. It returns true if the arrays are equal, and false otherwise.
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


//  takes in two arrays (actual and expected) as arguments and calls eqArrays with these arrays as
// arguments to check if they are equal. Logs a message (passed or fail)
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// TESTS CASE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, (x) => x < 0), [1, 2, 5, 7, 2]);


const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
assertArraysEqual(takeUntil(data2, (x) => x === ","), ["I've", "been", "to", "Hollywood"]);

const data3 = ["ground", "control", "to", "test", "major", "tom"];
assertArraysEqual(takeUntil(data3, (x) => x === "test"), ["ground", "control", "to"]);



