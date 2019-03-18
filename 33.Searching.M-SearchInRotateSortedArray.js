/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.
Your algorithm's runtime complexity must be in the order of O(log n).
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1
    while(left <= right) {
        const mid = left + parseInt((right - left) / 2)
        if(nums[mid] === target) return mid
        if(nums[mid] < nums[right]) {
            if(nums[mid] < target && nums[right] >= target) left = mid + 1
            else right = mid - 1
        }else {
            if(nums[mid] > target && nums[left] <= target) right = mid - 1
            else left = mid + 1
        }
    }
    return -1
};