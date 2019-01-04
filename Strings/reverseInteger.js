/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 输入: -120
 * 输出: -21
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const _integer = Math.abs(x).toString()
    let sign = x.toString()[0] == '-' ? '-' : ''
    let result = ''
    for(let i=_integer.length-1;i>=0;i--) {
        result += _integer[i]
    }
    result = Number(sign + result)
    return (result >= -(2**31) && result <= 2**31-1 ) ? result : 0
};