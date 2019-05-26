/**
 * Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
 * Input:
  A = [ 1, 2]
  B = [-2,-1]
  C = [-1, 2]
  D = [ 0, 2]

  Output:
  2
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const hash_one = {}
  const hash_two = {}
  const len = A.length
  for(let i=0; i<len; i++) {
      for(let j=0; j<len; j++) {
          const va = A[i]
          const vb = B[j]
          const vc = C[i]
          const vd = D[j]
          hash_one[va + vb] = hash_one[va + vb] ? hash_one[va + vb] + 1 : 1
          hash_two[vc + vd] = hash_two[vc + vd] ? hash_two[vc + vd] + 1 : 1
      }
  }
  return Object.keys(hash_one).reduce((all, key)=> {
      if(hash_two[-Number(key)]) all += hash_one[key] * hash_two[-key]
      return all
  },0)
};
