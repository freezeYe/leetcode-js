/**
 * 263
 * Write a program to check whether a given number is an ugly number.
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  [2,3,5].forEach(n=> {
      while(num && num % n === 0) {
          num /= n
      }
  })
  return num === 1
};