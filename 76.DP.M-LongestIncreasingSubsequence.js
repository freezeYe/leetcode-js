/**
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 * Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 * O(n*2)
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 0) return 0
    let longest = 0
    const dp = []
    for(let i=0; i<nums.length; i++) {
        dp[i] = 1
        for(let j=0; j<i; j++) {
            if(nums[j] < nums[i]) {
                dp[i] = dp[i] > dp[j] + 1 ? dp[i] : dp[j] + 1
            }
        }
        if(dp[i] > longest) longest = dp[i]
    }
    return longest
};

O(NlogN)
var lengthOfLIS = function(nums) {
    const binarySearch = (nums, n, target) => {
        let left = 0
        let right = n
        
        while(left < right) {
          let mid = left + Math.floor((right - left) / 2)
          if (nums[mid] < target) {
            left = mid + 1
          } else {
            right = mid
          }
        }
        return left
    }
    let len = 0
    const dp = new Array(nums.length).fill(0)

    for (let i =0; i < nums.length; i++) {
        const pos = binarySearch(dp, len, nums[i])
        dp[pos] = nums[i]
        if (pos === len) {
        len++
        }
    }
    return len
};