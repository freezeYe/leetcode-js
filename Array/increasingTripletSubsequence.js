/**
 * Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if(nums.length < 3) return false
    let start = Infinity,
        end = Infinity
    for(let value of nums) {
        if(start >= value) start = value
        else if(end >= value) end = value
        else return true
    }
    return false
};