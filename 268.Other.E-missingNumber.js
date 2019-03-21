/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0
    const len = nums.length
    for(let i=0;i<len;i++) {
        if(nums[i] <= len) sum += nums[i]
    }
    return (0+len)*(len+1)/2 - sum
};