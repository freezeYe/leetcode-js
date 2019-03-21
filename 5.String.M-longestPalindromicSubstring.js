/**
 * Given a string s, find the longest palindromic substring in s. 
 * You may assume that the maximum length of s is 1000.
 */

 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome_general = function(s) {
    let result = ''
    for(let i = 0; i < s.length; i++) {
        const str_even = generatePalindrome(i , i+1, s)
        const str_odd = generatePalindrome(i-1, i+1, s)
        const longest = str_even.length > str_odd.length ? str_even: str_odd
        if(result.length < longest.length) result = longest
    }
    return result

    function generatePalindrome(backward, forward, s) {
        while(forward < s.length && backward > -1) {
            if(s[forward] !== s[backward]) break
            forward += 1
            backward -= 1
        }
        return s.substring(backward + 1, forward)
    }
};

var longestPalindrome_dp = function(s) {
    const dp = new Array(s.length).fill(0).map(i=> [])
    let left = 0,
        right = 0,
        longest = 0
    for(let i=0; i<s.length; i++) {
        for(let j=0; j<i; j++) {
            dp[j][i] = (s[i] === s[j]) && ( i - j < 2 || dp[j+1][i-1])
            if( dp[j][i] && longest < i - j + 1) {
                longest = i - j + 1
                left = j
                right = i
            }
            dp[i][i] = 1
        }
    }
    return s.substring(left, right + 1)
};