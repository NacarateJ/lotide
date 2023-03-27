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

const assertArraysEqual = function(actual, expected) {
  // call the eqArrays function with the actual and expected arrays as arguments to check if they are equal.
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const without = function(source, itemsToRemove) {
  // Create a new array to store the filtered results
  let filteredArray = [];
  // Loop through each element in the source array
  for (let i = 0; i < source.length; i++) {
    // If the current element is not in the itemsToRemove array, add it to the filtered array
    if (!itemsToRemove.includes(source[i])) {
      filteredArray.push(source[i]);
    }
  }
  // Return the filtered array
  return filteredArray;
};

const words = ["hello", "world", "lighthouse"];

// Test that the function returns a new array and does not modify the original
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should return true

// Test basic functionality
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // should return true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should return true

// Test edge cases
assertArraysEqual(without([], []), []); // should return true
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); // should return true
assertArraysEqual(without([], [1, 2, 3]), []); // should return true
assertArraysEqual(without([1, 2, 3], [4, 5, 6]), [1, 2, 3]); // should return true
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []); // should return true
assertArraysEqual(without(["hello", "world", "lighthouse"], ["world"]), ["hello", "lighthouse"]); // should return true