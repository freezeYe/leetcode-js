/**
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1,
        j = num2.length - 1,
        remainder = 0,
        res = ''
    while(i >= 0 || j >= 0 || remainder > 0) {
        const a = i >= 0 ? num1[i] - '0' : 0
        const b = j >= 0 ? num2[j] - '0' : 0
        res = ((a + b + remainder) % 10) + res
        remainder = parseInt((a + b + remainder) / 10)
        i--
        j--
    }
    return res
};