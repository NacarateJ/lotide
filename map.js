// Our map function will take in two arguments:
// 1. An array to map
// 2. A callback function
// The map function will return a new array based on the results of the callback function


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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

// MAPPING ARRAY OF WORDS
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, (word) => word[0]), ["g", "c", "t", "m", "t"]);

// MAPPING ARRAY OF NUMBERS
const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(map(numbers, (num) => num * num), [1, 4, 9, 16, 25]);

// MAPPING AN ARRAY OF STRINGS
const strings = ["hello", "world", "goodbye"];
assertArraysEqual(map(strings, (string) => string.length), [5, 5, 7]);

// MAPPING AN ARRAY OF OBJECTS
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
assertArraysEqual(map(people, (person) => person.name), ["Alice", "Bob", "Charlie"]);
assertArraysEqual(map(people, (person) => person.age), [25, 30, 35]);
