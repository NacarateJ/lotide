// create a function that takes in two objects and returns true or false, based on a perfect match

// In order to support array value comparisons, we will use the  eqArrays function.

// If the key value is an array, ensure that eqArrays can be called to compare the array key values for both objects.

// use assertEqual function to write tests for eqObjects.


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


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Check if both objects have the same number of keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // If the number of keys is different for the two objects, they cannot be identical, so return false
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate through each key in object1 and compare its value to the corresponding key in object2
  for (let key of keys1) {
    // If both values are arrays, use eqArrays to compare them
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If the arrays are not identical, the objects are not identical, so return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      // If the values are not equal, return false
      return false;
    }
  }

  // If all keys and values are equal, return true
  return true;
};

// Tests
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
