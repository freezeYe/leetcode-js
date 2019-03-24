/**
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * Input: "abab"
    Output: True
    Explanation: It's the substring "ab" twice.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return !!s.match(/^(.*)(\1+)$/)
};

var repeatedSubstringPattern = function(s) {
    let ss = (s + s).slice(1, (s + s).length - 1)
    
    return ss.includes(s)
};