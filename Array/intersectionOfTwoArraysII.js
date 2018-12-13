/**
 * Given two arrays, write a function to compute their intersection.
 * 输入: nums1 = [1,2,2,1] nums2 = [2,2]
 * 输出: [2,2]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = []
    const dir = nums1.reduce((obj,cur)=> {
        obj[cur] = (obj[cur] || 0) + 1
        return obj
    },{})
    for(let i=0;i<nums2.length;i++) {
        if(dir[nums2[i]]) {
            result.push(nums2[i])
            dir[nums2[i]] -= 1
        }
    }
    return result
};
