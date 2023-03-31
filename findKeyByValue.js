// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(objectToSearch, targetValue) {
  // Iterate over the keys of the object using a for...of loop
  // Object.keys() returns an array of the object's keys(the property names)
  for (let key of Object.keys(objectToSearch)) {
    // Check if the value associated with the current key is equal to the target value

    // using objectToSearch[key] evaluates the key variable to get the name of the property,
    // and uses that name to access the corresponding value in the objectToSearch object.
    if (objectToSearch[key] === targetValue) {
      // If the value matches, return the current key
      return key;
    }
  }
  // If no matching key is found, return undefined
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  thriller: "Mindhunter",
  documentary: "Making a Murderer",
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


// Test cases
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Mindhunter"), "thriller");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(
  findKeyByValue(bestTVShowsByGenre, "Making a Murderer"),
  "documentary"
);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");