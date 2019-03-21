/**
 * Given a string which consists of lowercase or uppercase letters, 
 * find the length of the longest palindromes that can be built with those letters.
 * This is case sensitive, for example "Aa" is not considered a palindrome here.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const chart = {}
    let hasOdd = false,
        result = 0
    s.split('').forEach(c=> {
        if(!chart[c]) chart[c] = 1
        else chart[c] = chart[c] + 1
    })
    Object.keys(chart).forEach(c=> {
        if(chart[c] % 2 == 0) {
            result += chart[c]
            chart[c] = 0
        }else {
            result += chart[c] - 1
            hasOdd = true
        }
    })
    if(hasOdd) result += 1
    return result
};
