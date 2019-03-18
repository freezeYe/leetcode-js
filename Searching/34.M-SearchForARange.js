/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * If the target is not found in the array, return [-1, -1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0,
        right = nums.length - 1
    let result = null
    while(left <= right) {
        let mid = left + parseInt((right - left) / 2)
        if(nums[mid] === target) {
            left = mid
            right = mid
            while(nums[left - 1] === target ) left--
            while(nums[right + 1] === target) right++
            result = [left, right]
            break
        }
        if(nums[mid] > target) right = mid - 1
        if(nums[mid] < target) left = mid + 1
    }
    return result ? result : [-1, -1]
};