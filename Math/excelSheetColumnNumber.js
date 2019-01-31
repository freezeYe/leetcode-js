/**
 * 171
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let exponential = 0
  const baseCode = 64 // 'A'.charCodeAt() - 1
  let result = 0
  for(let i = s.length - 1; i >= 0; i--) {
      const char = s[i]
      result += Math.pow(26,exponential) * (char.charCodeAt() - baseCode)
      exponential++
  }
  return result
};