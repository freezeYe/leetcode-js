/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 输入: [2,2,1]
 * 输出: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce( (xor,n) => xor^n)  //同值相消
}

var singleNumber = function(nums) {
    nums = nums.sort()
    for(let i=0;i<nums.length;i++) {
        if(nums[i-1]!==nums[i]&&nums[i+1]!==nums[i]) return nums[i]
    }
};

