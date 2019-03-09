/**
 * Given a collection of distinct integers, return all possible permutations.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    function recursive(index) {
        for(let i=index; i<nums.length; i++) {
            swap(index, i, nums)
            if(index == nums.length - 1) result.push([...nums])
            recursive(index + 1)
            swap(i, index, nums)
        }
    }
    recursive(0)
    return result
};

function swap(key1, key2, arr) {
    const temp = arr[key1]
    arr[key1] = arr[key2]
    arr[key2] = temp
}