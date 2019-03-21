/**
 * 205
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. 
 * No two characters may map to the same character but a character may map to itself.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if(!s && !t) return true
  if(s.length !== t.length) return false
  const a1 = {}
  const a2 = {}
  for(let i=0; i<s.length; i++) {
      if(a1[s[i]] !== a2[t[i]]) return false
      a1[s[i]] = a2[t[i]] = i
  }
  return true
};