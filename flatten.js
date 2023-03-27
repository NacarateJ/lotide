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

const flatten = function(arr) {

  const flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    //  Array.isArray() method checks whether the current element of arr is an array
    if (Array.isArray(arr[i])) {
      //  the spread operator (...) spreads the contents of the current array element
      // (arr[i]) into the flattenedArr array. This has the effect of "flattening"
      // the nested array by adding all its elements directly to the flattenedArr array
      flattenedArr.push(...arr[i]);
    } else {
      //  adds the current in arr (if it is not an array) to the end of the flattenedArr array
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};


// TEST CASES
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // should pass
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, [7, 8]]]), [1, 2, 3, 4, 5, 6, [7, 8]]); // should fail because the flatten function only handles one level of nesting
assertArraysEqual(flatten([]), []); // should pass
assertArraysEqual(flatten([[], [], []]), []); // should pass
assertArraysEqual(flatten([1, 'two', [false, null], undefined]), [1, 'two', false, null, undefined]); // should pass