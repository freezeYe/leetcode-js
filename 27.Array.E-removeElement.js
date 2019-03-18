/**
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * 输入: nums = [3,2,2,3], val = 3,
 * 输出: nums=[2,2] return 2
 */

var removeElement = function(nums, val) {
    if(nums.length === 0) return 0
    let validLength = 0,
        end = nums.length-1
    while(validLength !== end) {
        if(nums[end] !== val) {
            [nums[validLength],nums[end]] = [nums[end],nums[validLength]]
            validLength++
        }else {
            end--
        }
    }
    return nums[end] == val ? validLength : validLength + 1
}