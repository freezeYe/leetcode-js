/**
 * Reverse bits of a given 32 bits unsigned integer.
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let s = 0
    for(let i=0;i<32;i++) {
        if((n&(1<<i)) !== 0) {
            s |= 1<<(31-i)
        }
    }
    return s>>>0
};