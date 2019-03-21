/**
 * 231
 * Given an integer, write a function to determine if it is a power of two.
 * 输入: 16
 * 输入: true
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(n == 1) return true
  let p = 1
  while(p < n) {
      p *= 2
      if(p === n) return true
  }
  return false
};