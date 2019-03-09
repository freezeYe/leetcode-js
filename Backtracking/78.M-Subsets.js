
/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
     let result = [[]]
     for(let i=0; i<nums.length; i++) {
         const num = nums[i]
         result = result.concat(result.map(r=> r.concat(num)))
     }
     return result
 };
 
 

