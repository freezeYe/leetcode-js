/**
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * Input: s = "rat", t = "car"
 * Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const reference = {}
    for(let k=0;k<s.length;k++) {
       reference[s[k]] =  reference[s[k]] ?  reference[s[k]] + 1 : 1
    }
    for(let j=0;j<t.length;j++) {
       if(!reference[t[j]]) return false
        reference[t[j]] -= 1
    }
    return true
};