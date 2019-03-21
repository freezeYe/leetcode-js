/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * 输入: -12
 * 输出: false
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    const origin = x
    let reverse = 0
    while(x) {
        const remainder = x % 10
        reverse = reverse * 10 + remainder
        x = parseInt(x / 10)
    }
    return reverse === origin
};