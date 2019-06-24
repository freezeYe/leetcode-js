/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 * Input: [1,2,0]
 * Output: 3
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    while (nums[i] <= size && nums[i] > 0 && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < size; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return size + 1;
};
