/**
 * 290
 * Given a pattern and a string str, find if str follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  pattern = pattern.split('')
  str = str.split(' ')
  if(pattern.length !== str.length) return false
  const p1 = {},
        p2 = {}
  for(let i=0; i<pattern.length; i++) {
      if(p1[pattern[i]] !== p2[str[i]]) return false
      p1[pattern[i]] = p2[str[i]] = i
  }
  return true
};