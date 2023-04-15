// TAIL FUNCTION TO WORK WITH TEST TO CHECK THE IF NEM ARRAY IS EXCLUDING THE HEAD (i[0]) OF THE ARRAY

const tail = (array) => {
  return array.slice(1);
};

module.exports = tail;

console.log(tail([5, 6, 7]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail([7]));
console.log(tail([]));


