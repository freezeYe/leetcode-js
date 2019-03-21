/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0,
        start = 0
    for(let i=0; i<s.length; i++) {
        const index = s.indexOf(s[i], start)
        if(index > -1 && index < i) {
            start = index + 1
        }
        longest = Math.max(longest, index - start + 1)
    }
    return longest
};