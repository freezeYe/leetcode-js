/**
 * 303
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
 */

/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.nums = nums
        this.sum = Array(nums.length + 1).fill(0)
        for (let i = 0; i < nums.length; i++) {
            this.sum[i + 1] = this.sum[i] + this.nums[i];
        }
    }
    
    /** 
     * @param {number} i 
     * @param {number} j
     * @return {number}
     */
    
    sumRange(i, j) {
        return this.sum[j + 1] - this.sum[i];
    }
};
