/**
 * 169
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const floor = Math.floor(nums.length / 2)
  const record = []
  for(let i=0; i<nums.length; i++) {
      if(!record[nums[i]]) record[nums[i]] = 1
      else record[nums[i]] += 1
      if(record[nums[i]] > floor) return nums[i]
  }
  return null
};