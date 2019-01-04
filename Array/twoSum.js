/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 输入： nums = [2, 7, 11, 15], target = 9,
 * 解析： nums[0] + nums[1] = 2 + 7 = 9,
 * 输出： return [0, 1].
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