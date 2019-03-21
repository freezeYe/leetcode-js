/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W/g,'').toLowerCase()
    let start = 0,
        end = s.length-1
    while(start < end) {
        if(s[start] !== s[end]) return false
        start++
        end--
    }
    return true
};