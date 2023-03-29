// implement a function called countOnly. It take in a collection of items and return counts
// for a specific subset of those items. It won't count everything. In order to decide what to count,
// it will also be given an idea of which items we care about and it will only count those, ignoring the others.

// countOnly will be given an array and an object. It will return an object containing counts of
// everything that the input object listed.

// Ex:
// arr = [a, a, b, c, d, e, a]

// object = {
// a: true,
// d: true,
// b: false,
// f:true
// }

// expected result = {
// a:3,
// d:1
// }

// only keys which have a truthy value should be counted in the resulting object.
// All other strings (either set to false or not included at all in the object) should not be counted.
// That said, if a particular string is meant to be counted but does not exist in the input
// array (like "f" in the example above), it also does not have to be included in the final count.


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // iterates through each item in the allItems array
  for (const item of allItems) {
    // checks if the current item being iterated over is present in the itemsToCount object
    if (itemsToCount[item]) {
      // If the current item exists in the itemsToCount object, the nested if statement checks
      // if the results object already has a property with the same name as the current item
      if (results[item]) {
        // If the results object does have a property with the same name as the current item,
        // then 1 is added to the value of that property
        results[item] += 1;
      } else {
        // If the results object does not have a property with the same name as the current item,
        // then a new property is added to the results object with the current item's name and a value of 1
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);