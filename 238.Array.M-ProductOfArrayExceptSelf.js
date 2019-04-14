/**
 * Given an array nums of n integers where n > 1,  
 * return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 */

 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let zeroSum = 0
  const mutil = nums.reduce((all,n)=> {
      if(n===0) zeroSum++
      return n===0 ? all : all*n
  },1)
  return nums.map((n)=> {
      if(zeroSum > 1) return 0
      if(zeroSum === 0) {
          return mutil / n
      }
      return n===0 ? mutil : 0
  })
};