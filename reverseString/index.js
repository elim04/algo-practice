// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// decrementing loop option 1

// const reverse = (str) => {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(str[i]);
//     reversedString += str[i];
//   }
//   return reversedString;
// };

// methods turn into array and reverse option 2

const reverse = (str) => {
  let reversedString = str.split("").reverse().join("");
  return reversedString;
};

module.exports = reverse;
