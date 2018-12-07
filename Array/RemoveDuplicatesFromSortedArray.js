/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 输入: nums = [1,1,2,3,4]
 * 结果: nums = [1,2,3,4,1] && return 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let sum = 0,
        k=0
    for(let i=0;i<nums.length;i++) {
        if(nums[i]!==nums[i-1]) {
            sum++
            if(k < i) {
                nums[k] = nums[i]
            }
            k++
        }
    }
    return sum
};