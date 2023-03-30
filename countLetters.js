// Create a function called countLetters.

// The function should take in a sentence (as a string) and then return a
// count of each of the letters in that sentence skipping whitespaces


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(string) {
  let result = {};

  // iterates through each letter of the string
  for (let letter of string) {
    // if the letter is an empty string, it skips it
    if (letter === " ") {
      continue;
    }
    // if the result obj already has the letter, 1 is added to the value of that property (letter)
    if (result[letter]) {
      result[letter] += 1;
    } else {
      // if the letter is not in the result obj yet,
      // a new property is added to the results obj (the current letter and a value of 1)
      result[letter] = 1;
    }
  }

  return result;
}

// console.log(countLetters("hello world"));


// TEST CASE USING ASSERTEQUAL
const result1 = countLetters("hello world");
assertEqual(result1["h"], 1); // Test should pass: There is only 1 "h" in "hello world"
assertEqual(result1["e"], 1); // Test should pass: There is only 1 "e" in "hello world"
assertEqual(result1["l"], 3); // Test should pass: There are 3 "l"s in "hello world"
assertEqual(result1["o"], 2); // Test should pass: There are 2 "o"s in "hello world"
assertEqual(result1["w"], 1); // Test should pass: There is only 1 "w" in "hello world"
assertEqual(result1["r"], 1); // Test should pass: There is only 1 "r" in "hello world"
assertEqual(result1["d"], 1); // Test should pass: There is only 1 "d" in "hello world"
assertEqual(result1[" "], undefined); // Test should pass: Spaces are not counted in the result object
assertEqual(result1["x"], undefined); // Test should pass: "x" is not present in "hello world"

