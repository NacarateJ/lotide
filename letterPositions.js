// We'll implement a new function letterPositions which will return all the indices
// (zero-based positions) in the string where each character is found.

// For each letter, instead of returning just one number to represent its number of
// occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

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


const letterPositions = function(sentence) {
  // initialize an empty object to store the results
  const results = {};

  // loop over each character in the sentence string
  for (let i = 0; i < sentence.length; i++) {
    // if the character is a space, skip to the next character
    if (sentence[i] === " ") {
      continue;
    }

    // if the character already exists as a property in the results object,
    // add the current index to the array for that character
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      // otherwise, create a new property for the character and set its value to an array
      // containing the current index
      results[sentence[i]] = [i];
    }
  }

  // return the results object containing the indices of each character in the sentence
  // (excluding spaces)
  return results;
};

// console.log(letterPositions("hello"))
// console.log(letterPositions("hello").l)

assertArraysEqual(letterPositions("hello").l, [2, 3]);
