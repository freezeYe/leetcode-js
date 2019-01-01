/**
 * Given a sorted array and a target value, return the index if the target is found. If not, 
 * return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array. 
 * 输入: nusm = [1,2,3], target = 0
 * 输出: 0
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0
    let middle = parseInt(nums.length / 2),
        bottom = 0,
        top = nums.length
    while(top !== bottom) {
        if(nums[middle] === target) return middle
        if(nums[middle] > target) {
            if(middle === 0 || nums[middle-1] < target) return middle
            top = middle
            middle = parseInt((bottom + middle) / 2)
        }else {
            if(middle === nums.length-1 || nums[middle+1] > target) return middle+1
            bottom = middle
            middle = parseInt((middle + top) / 2)
        } 
    }
    return 0
};