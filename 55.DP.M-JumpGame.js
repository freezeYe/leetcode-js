/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reach = nums[0]
    for(let i=1; i<nums.length; i++) {
        reach -= 1
        if(reach < 0) return false
        reach = Math.max(reach, nums[i])
    }
    return true
};