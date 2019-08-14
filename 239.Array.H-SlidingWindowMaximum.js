/**
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. 
 * Return the max sliding window.
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.
 * Follow up:
 * Could you solve it in linear time?
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const q = new Deque()
  const res = []
  for (let i = 0; i < nums.length; i++) {
    while (!q.empty() && q.front() == i - k) q.pop_front()
    while (!q.empty() && nums[q.back()] < nums[i]) q.pop_back()
    q.push_back(i)
    if (i >= k - 1) res.push(nums[q.front()])
  }
  return res
};

function Deque() {
  this.dqueue = []
  this.push_back = (num) => this.dqueue.push(num)
  this.front = () => this.dqueue[0]
  this.back = () => this.dqueue[this.dqueue.length - 1]
  this.pop_front = () => this.dqueue.shift()
  this.pop_back = () => this.dqueue.pop()
  this.empty = () => !this.dqueue.length
}