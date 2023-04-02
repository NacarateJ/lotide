// Implement the function findKey which takes in an object and a callback.
// It should scan the object and return the first key for which the callback
// returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(objectToScan, callback) {
  // Iterate over the keys of the object using a for...of loop
  // Object.keys() returns an array of the object's keys(the property names)
  for (let objKey of Object.keys(objectToScan)) {
    // For each key, call the callback function with the corresponding value in the object
    // If the callback returns a truthy value, return the current key
    if (callback(objectToScan[objKey])) {
      return objKey;
    }
  }
  // If no matching key is found, return undefined
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// TESTS CASE

// Test case 1: Find the first key with matching value
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 },
};
assertEqual(findKey(object1, (x) => x.stars === 2), "noma");

// Test case 2: No matching key found
assertEqual(findKey(object1, (x) => x.stars === 4), undefined);

// Test case 2: empty object
const object2 = {};
assertEqual(
  findKey(object2, (x) => x === "something"), undefined);

// Test case 4: Find the first key with matching string value
const object3 = {
  a: "hello",
  b: "world",
  c: "goodbye",
};
assertEqual(findKey(object3, (x) => x.startsWith("h")), "a");

// Test case 5: Find the first key with matching number value
const object4 = {
  a: 1,
  b: 2,
  c: 3
};
assertEqual(findKey(object4, (x) => x > 2), "c");