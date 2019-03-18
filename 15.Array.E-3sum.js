/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 *  Find all unique triplets in the array which gives the sum of zero.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=> a-b)
    const solution = []
    for(let index = 0; index < nums.length; index++) {
        if(nums[index] > 0) break
        if(index > 0 && nums[index] === nums[index-1]) continue
        let i = index + 1,
            j = nums.length - 1
        const target = 0 - nums[index]
        while( i < j) {
            if(nums[i] + nums[j] === target) {
                solution.push([nums[index], nums[i], nums[j]])
                while( i < j && nums[i] === nums[i+1]) i++
                while( i < j && nums[j] === nums[j-1]) j--
                i++
                j--
            }else if(nums[i] + nums[j] < target) {
                i++
            }else {
                j--
            }
        }
    }
    return solution
};