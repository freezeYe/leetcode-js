/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 输入: nums1 = [1,2,3,0,0,0], m = 3
 *      nums2 = [2,5,6],       n = 3
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let tail = n+m-1
    while(n>0) {
        if(nums1[m-1] > nums2[n-1]) {
            nums1[tail] = nums1[m-1]
            tail--
            m--
        }else {
            nums1[tail] = nums2[n-1]
            tail--
            n--
        }
    }
    return nums1
};