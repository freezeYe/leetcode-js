/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * input： nums = [2, 7, 11, 15], target = 9,
 * output： return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dic = {}
    for(let i=0;i<nums.length;i++) {
        const diff = target - nums[i]
        if(dic[diff] !== undefined) {
            return [dic[diff],i]
        }else {
            dic[nums[i]] = i
        }
    }
};