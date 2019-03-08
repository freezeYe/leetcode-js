/**
 * Given a non-empty array of integers, 
 * return the third maximum number in this array. If it does not exist, 
 * return the maximum number. The time complexity must be in O(n).
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max = -Infinity,
      middle = -Infinity,
      result = -Infinity
  nums.forEach(n=> {
      if(n > max) {
          result = middle
          middle = max
          max = n
      }else if(n < max){
          if(n > middle) {
              result = middle
              middle = n
          }else if(n < middle) {
              if(n > result) result = n
          }
      }
  })
  return result == -Infinity ? max : result
};