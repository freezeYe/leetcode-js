/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * 输入: 11
 * 输出: 3
 * Explanation: Integer 11 has binary representation 00000000000000000000000000001011 
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0
    while(n >= 1) {
        if(n % 2 !== 0) sum++
        n = Math.floor(n/2)
    }
    return sum
};