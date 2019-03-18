/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0],
        sumLen = nums[0]
    for(let i=1; i<nums.length; i++) {
        sumLen = sumLen > 0 ? sumLen + nums[i] : nums[i]
        if(maxSum < sumLen) maxSum = sumLen
    }
    return maxSum
};