/**
 * Given a non-empty array of integers, return the k most frequent elements.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {},
          result = [],
          bucket = []
    nums.forEach(n=> {
        if(!count[n]) count[n] = 1
        else count[n] += 1
    })
    Object.keys(count).forEach(c=> {
        if(!bucket[count[c]]) bucket[count[c]] = []
        bucket[count[c]].push(c)
    })
    for(let i=nums.length; i >= 0; i--) {
        if(bucket[i]) {
            for(let j=0; j<bucket[i].length; j++) {
                result.push(bucket[i][j])
                if(result.length === k) return result
            }
        }
    }
    return result
};