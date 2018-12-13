/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * 输入: [1,2,3,1]
 * 输出: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length === 0 ) return false
    return nums.some((item,index,arr)=> {
        return (arr.lastIndexOf(item) !== index||arr.indexOf(item) !== index)
    })
};

//时间复杂度低
var containsDuplicate = function(nums) {
    if(nums.length === 0 ) return false
    const o = {}
    for(let i=0;i<nums.length;i++) {
        if(o[nums[i]] !== undefined) return true
        else o[nums[i]] = 1
    }
    return false
};