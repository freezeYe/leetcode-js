/**
 * Given a non-negative index k where k ≤ 33, 
 * return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = [1]
  for(let i=1; i<=rowIndex; i++) {
      result.push(0)
      for(let j=i; j>=1; j--) {
          result[j] = result[j] + result[j - 1]
      }
  }
  return result
};