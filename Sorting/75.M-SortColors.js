/**
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0,
        right = nums.length - 1,
        point = 0
    while(point <= right) {
        if(nums[point] === 0) {
            swap(left, point, nums)
            left++
            point++
        }else if(nums[point] === 2) {
            swap(point, right, nums)
            right--
        }else {
            point++
        }
    }
};

function swap(pre, end, nums) {
    [nums[pre], nums[end]] = [nums[end], nums[pre]]
}