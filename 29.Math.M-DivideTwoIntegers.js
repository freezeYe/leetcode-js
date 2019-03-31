/**
 * Given two integers dividend and divisor, divide two integers without using multiplication,
 * division and mod operator.
 * Return the quotient after dividing dividend by divisor.
 * The integer division should truncate toward zero.
 * Input: dividend = 10, divisor = 3
 * Output: 3
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend === -(2**31) && divisor === -1) return (2**31) - 1
    const sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1
    let m = Math.abs(dividend),
        n = Math.abs(divisor)
    if(n === 1) return m * sign
    let res = 0
    while (m >= n) {
        let t = n, p = 1;
        while ((t << 1) > 0 && m >= (t << 1)) {
            t <<= 1;
            p <<= 1;
        }
        res += p;
        m -= t;
    }
    return sign * res
};
