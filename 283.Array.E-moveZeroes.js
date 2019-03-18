/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 输入：[0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0,
        len =  nums.length - 1
    while(index < len) {
        if(nums[index] === 0) {
            nums.push(nums.splice(index,1)[0])
            len--
        }else {
            index++
        }
    }
};