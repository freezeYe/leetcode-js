var addDigits = function(num) {
  // the typeof NaN === 'number', check input
  if (Number.isNaN(num)) {
      return 0
  }
  // es6 way, convert string to array
let sum = String(num).split('').reduce((a, b) => +a + +b);
return sum >= 10 ? addDigits(sum) : sum;
};