// TAIL FUNCTION TO WORK WITH TEST TO CHECK THE IF NEM ARRAY IS EXCLUDING THE HEAD (i[0]) OF THE ARRAY
// USING to.String() METHOD
const tail = (array) => {
  return array.slice(1).join(", ");
};

module.exports = tail;


