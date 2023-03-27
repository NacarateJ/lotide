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

const middle = function(arr) {
  const len = arr.length;
  if (len <= 2) {
    return [];
  } else if (len % 2 === 0) {
    // if the length of the array is even, the function calculates the index of
    // the two middle elements and returns an array containing those two elements
    const mid = len / 2;
    return [arr[mid - 1], arr[mid]];
  } else {
    //  if the length of the array is odd, the function calculates the index of
    // the middle element and returns an array containing that element
    // Math.floor method is used to round down the result of the division operation so that we get an integer index
    const mid = Math.floor(len / 2);
    return [arr[mid]];
  }
};

// test assertions
assertArraysEqual(middle([1]), []); // should return []
assertArraysEqual(middle([1, 2]), []); // should return []
assertArraysEqual(middle([1, 2, 3]), [2]); // should return [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should return [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should return [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should return [3, 4]
