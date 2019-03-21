/**
 * String to Integer
 * 结果集: '  -42' -> 42 , 'asd42' -> 0, '42sdf' -> 42
 */

/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2**31 - 1
const INT_MIN = -(2**31)
var myAtoi = function(str) {
    return str.match(/^\s*([-+]?\d+)/) ? 
        ((parseInt(RegExp.$1) <= INT_MAX && parseInt(RegExp.$1) >= INT_MIN) ?
         parseInt(RegExp.$1) : (parseInt(RegExp.$1) > INT_MAX ? INT_MAX : INT_MIN)) 
        : 0
};