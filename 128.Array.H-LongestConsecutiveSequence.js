/**
 * Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
 * Your algorithm should run in O(n) complexity.
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const table = {}
  const visited = {}
  let maxLen = 0
  nums.forEach(n => table[n] = true)
  nums.forEach(num => {
    let localLen = 1
    if (!visited[num]) {
      visited[num] = true
      let back = num
      while (table[--back]) {
        visited[num] = true
        localLen += 1
      }
      let forward = num
      while (table[++forward]) {
        visited[num] = true
        localLen += 1
      }
    }
    if (localLen > maxLen) maxLen = localLen
  })
  return maxLen
};