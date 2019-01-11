/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given two integers x and y, calculate the Hamming distance.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let n = x^y
    let sum = 0
    while(n >= 1) {
        if(n % 2 !== 0) sum++
        n = Math.floor(n/2)
    }
    return sum
};