/**
 * 349
 * Given two arrays, write a function to compute their intersection.
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const itemRecord = nums1.reduce((a,b)=> {
        a[b] = 1
        return a
    } ,{})
    return nums2.reduce((i,j)=> {
        if(itemRecord[j]) {
            i.push(j)
            itemRecord[j]--
        }
        return i
    },[])
};