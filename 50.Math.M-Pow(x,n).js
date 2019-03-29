/**
 * Implement pow(x, n), which calculates x raised to the power n (xn).
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const pn = n > 0 ? '+' : '-'
    n = n >= 0 ? n : -n
    let sum = x**n
    if(pn === '-') sum = 1 / sum
    return sum
};