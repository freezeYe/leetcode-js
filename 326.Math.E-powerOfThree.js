/**
 * Given an integer, write a function to determine if it is a power of three.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 0 ) return false
    while(n % 3 === 0) {
        n /= 3
    }
    return n === 1
};