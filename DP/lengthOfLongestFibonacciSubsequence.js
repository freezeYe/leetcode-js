/**
 * Input: [1,2,3,4,5,6,7,8]
 * Output: 5
 * Explanation:
 * The longest subsequence that is fibonacci-like: [1,2,3,5,8].
 */


/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
  if(A == null || A.length == 0) return 0
  A = A.sort((a,b)=> Number(a)- Number(b))
  const dic = {}
  let maxLen = 0
  for(let i=0; i<A.length; i++) {
    dic[A[i]] = {}
  }
  for(let i=0; i<A.length; i++) {
    let localLen = 2
    for(let j=i-1; j>=0; j--) {
      const need = A[i] - A[j]
      let curLen = 2
      if(A[j] > need && dic[need]) {
        curLen = (dic[A[j]][need] || 2) + 1
      }
      dic[A[i]][A[j]] = curLen
      if(localLen < curLen) localLen = curLen
    }
    if(maxLen < localLen) maxLen = localLen
  }
  return maxLen > 2 ? maxLen : 0
};
console.log(lenLongestFibSubseq([1,2,3,4,5,6,7,8]))