/**
 * 258
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 */
var addDigits = function(num) {
  // the typeof NaN === 'number', check input
  if (Number.isNaN(num)) {
      return 0
  }
  // es6 way, convert string to array
let sum = String(num).split('').reduce((a, b) => +a + +b);
return sum >= 10 ? addDigits(sum) : sum;
};