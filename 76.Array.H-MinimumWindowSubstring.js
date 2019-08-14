/**
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 * Example:
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 * Note:
 * If there is no such window in S that covers all characters in T, return the empty string "".
 * If there is such window, you are guaranteed that there will always be only one unique minimum window in S.} s
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const letterMap = {}
  let minLen = Infinity,
    left = 0,
    cnt = 0,
    res = ''
  for (let v of t) {
    if (letterMap[v] !== undefined) letterMap[v] = ++letterMap[v]
    else letterMap[v] = 1
  }
  for (let i = 0; i < s.length; i++) {
    if (--letterMap[s[i]] >= 0) cnt++
    while (cnt === t.length) {
      const localLen = i - left + 1
      if (minLen > localLen) {
        minLen = localLen
        res = s.substr(left, minLen)
      }
      if (++letterMap[s[left]] > 0) cnt--
      left++
    }

  }
  return res
};