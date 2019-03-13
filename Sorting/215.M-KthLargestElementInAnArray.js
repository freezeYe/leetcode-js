/**
 * Find the kth largest element in an unsorted array. 
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return partion(0, nums.length - 1, nums, k)
};

function partion(left ,right, nums, k) {
    const value = nums[left]
    const l = left
    const r = right
    while(left < right) {
        while(right > left && nums[right] >= value) {
            right--
        }
        nums[left] = nums[right]
        while(right > left && nums[left] <= value) {
            left++
        }
        nums[right] = nums[left]
    }
    nums[left] = value
    if(left === nums.length - k) return value
    if(left > nums.length - k) return partion(l ,left - 1, nums, k)
    else return partion(left + 1, r, nums, k)
}