/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * 输入: [1,2,3,4,5,6,7] k=3
 * 输出: [5,6,7,1,2,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - k))
};