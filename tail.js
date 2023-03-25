const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// TAIL FUNCTION TO WORK WITH TEST TO CHECK IF THE ORIGINAL ARRAY IS NOT BEING MODIFIED
const tail = (array) => {
  return array.slice(1);
};


// TAIL FUNCTION TO WORK WITH TEST TO CHECK THE IF NEM ARRAY IS EXCLUDING THE HEAD (i[0]) OF THE ARRAY
// USING to.String() METHOD
// const tail = (array) => {
//   return array.slice(1).toString();
// };


// TEST TO CHECK THE NEM ARRAY IS EXCLUDING THE HEAD (i[0]) OF THE ARRAY

// assertEqual(tail([5, 6, 7]), "6,7");
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse,Labs");
// assertEqual(tail([7]), "");
// assertEqual(tail([]), "");




// COMPASS SUGESTION TO CHECK THE NEM ARRAY IS EXCLUDING THE HEAD (i[0]) OF THE ARRAY

// Our assertEqual function is too simple to compare array values.
// JavaScript doesn't allow the use of === or == to compare two arrays.

// Instead of comparing arrays, a workaround to this limitation could be to
// compare the values of the returned tail array directly, like this:

// TEST TO CHECK THE NEM ARRAY IS EXCLUDING THE HEAD (i[0]) OF THE ARRAY

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const result = tail([5, 6, 7]);
// assertEqual(result.length, 2);
// assertEqual(result[0], 6);
// assertEqual(result[1], 7);

// const result = tail([7]);
// assertEqual(result.length, 0);

// const result = tail([]);
// assertEqual(result.length, 0);




// TEST CODE TO CHECK IF THE ORIGINAL ARRAY IS NOT BEING MODIFIED

const original = [5, 6, 7];
// const original = ["Hello", "Lighthouse", "Labs"];
// const original = [7];
// const original = [];

tail(original);
assertEqual(original.length, 3);


