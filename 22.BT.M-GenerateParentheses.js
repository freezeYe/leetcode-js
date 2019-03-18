/**
 * Given n pairs of parentheses, 
 * write a function to generate all combinations of well-formed parentheses.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  function generateDFS(left, right, str = '') {
      if(left > right) return 
      else if(left === 0 && right === 0) result.push(str)
      else {
          if(left > 0) generateDFS(left - 1, right, str + '(')
          if(right > 0) generateDFS(left , right - 1, str + ')')
      }
  }
  generateDFS(n, n)
  return result
};