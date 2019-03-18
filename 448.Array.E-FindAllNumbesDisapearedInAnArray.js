/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * Input:
 * [4,3,2,7,8,2,3,1]
 * Output:
 * [5,6]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const res = []
    let i = 0
    while(i<nums.length) {
        if(nums[i] !== nums[nums[i]-1]) {
            const tmp = nums[nums[i]-1]
            nums[nums[i]-1] = nums[i]
            nums[i] = tmp
            i--
        }else i++
    }
     nums.forEach((n,index)=> {
         if(n !== index+1) res.push(index + 1)
     })
     return res
 };
 