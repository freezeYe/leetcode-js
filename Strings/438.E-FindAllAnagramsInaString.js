/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
 * The order of output does not matter.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0,
        right = 0,
        cnt = p.length,
        result = []
    const m = p.split('').reduce((o,a)=> {
        o[a] = o[a] ? o[a] + 1 : 1
        return o
    }, {})
    while(right < s.length) {
        if(m[s[right++]]-- > 0) cnt--
        if(cnt === 0) result.push(left)
        if(right - left === p.length && m[s[left++]]++ >= 0) cnt++
    }
    return result
};