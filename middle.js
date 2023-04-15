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

module.exports = middle;
