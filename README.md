# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nacaratej/lotide`

**Require it:**

`const _ = require('@nacaratej/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`
  * description: takes an array as its argument and returns the first element of the array. It returns `undefined` when called with an empty array.
* `tail(array)`
  * description: takes an array as its argument and returns a new array containing all elements except the first element of the original array. It returns an empty array `[]` when called with an empty array or an array with one single element `[7]`.
* `middle(arr)`
  * description: takes an array as its input and returns an array containing either one or two middle elements of the input array. It returns an empty array `[]` when called with an array with one or two elements `[7]` or `[7, 9]`.
* `countLetters(string)`
  * description: takes a string as input and returns an object that represents the count of each letter (excluding spaces) in the string.
* `countOnly(allItems, itemsToCount)`
  * description:  takes in two parameters: an array of strings called `allItems` and an object called `itemsToCount` specifying what to count. It returns an object, which contains the count of each item in the `allItems` array that was specified in the `itemsToCount` object.
* `eqArrays(arr1, arr2)`
  * description: takes in two arrays `arr1` and `arr2` as input and returns a boolean value indicating whether the two arrays are equal or not.
* `eqObjects(object1, object2)`
  * description: takes in two objects and checks if they are equal, returning `true` if they are and `false` otherwise. 
* `findKey(objectToScan, callback)`
  * description: takes two parameters: `objectToScan`, which is an object that will be scanned for a key, and `callback`, which is a function that will be called for each value in the object. It returns the first key for which the callback returns a truthy value. If no key is found it returns undefined.
* `findKeyByValue(objectToSearch, targetValue)`
  * description: takes an `object` and a `target value` as its parameters, and returns the first key in the object that contains the target value, or undefined if no key is found.
* `flatten(arr)`
  * description: takes an array as an argument and if the array's elements are also arrays, it "flattens" it by adding the nested arrays contents to the output array, otherwise it simply adds the element to the output array. It returns a new array that is a flattened version of the input array. 
* `letterPositions(sentence)`
  * description: takes in a string as an argument, and returns an object where each key is a character in the string, and each value is an array containing the indices where that character appears in the string (excluding spaces).
* `map(array, callback)`
  * description:  takes in two arguments: an `array` and a `callback` function and returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`
  * description: takes in an `array` and a `callback` function as arguments and returns an new array with all the elements from the given array up until the point where the `callback` function returns a truthy value. If the callback never returns a truthy value, then the entire original array is returned.
* `without(source, itemsToRemove)`
  * description: takes in two arrays, `source` and `itemsToRemove`, and returns a new array that contains all elements from `source` that are not in `itemsToRemove`.