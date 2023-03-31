// implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console
// it will help us easily test functions that return objects

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
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If the values are not equal, return false
      return false;
    }
  }

  // If all keys and values are equal, return true
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)}  !== ${inspect(expected)}`);
  }
};

assertObjectsEqual(
  { colors: ["red", "blue"], size: "medium" },
  { colors: ["red", "blue"], size: "medium" }
);


// Tests
assertObjectsEqual(
  { colors: ["red", "blue"], size: "medium" },
  { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }
);
assertObjectsEqual(
  { color: "red", size: "medium" },
  { size: "medium", color: "red" }
);
assertObjectsEqual(
  { color: "red", size: "medium" },
  { size: "medium", color: "red", sleeveLength: "long" }
);



// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertObjectsEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false);





