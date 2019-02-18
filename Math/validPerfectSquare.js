/**
 * 367
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num === 1) return true
  let start = 0,
      end = num
  while(start <= end) {
      const middle = Math.floor((start + end) / 2)
      const muttile = middle * middle
      if(muttile === num) return true
      else if(muttile < num) {
          start = middle + 1
      }else {
          end = middle - 1
      }
  }
  return false
};