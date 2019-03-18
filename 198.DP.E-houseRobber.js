/**
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, 
 * the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const dp = [0,nums[0]]
  for(let j=2; j<=nums.length; j++) {
      const tmp = dp[j-2]+nums[j-1]
      if(tmp > dp[j-1]) dp[j] = tmp
      else dp[j] = dp[j-1]
  }
  return dp[nums.length]
};