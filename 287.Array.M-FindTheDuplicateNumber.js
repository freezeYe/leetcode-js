/**
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), 
 * prove that at least one duplicate number must exist. Assume that there is only one duplicate number, 
 * find the duplicate one.
 * Input: [1,3,4,2,2]
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let left = 0, right = nums.length
  while (left < right) {
    let mid = left + Math.trunc((right - left) / 2), cnt = 0;
    for (let num of nums) {
      if (num <= mid)++cnt;
    }
    if (cnt <= mid) left = mid + 1;
    else right = mid;
  }
  return right;
};