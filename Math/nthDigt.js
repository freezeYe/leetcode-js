/**
 * 400
 * Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let len = 1, basic = 9, start = 1
    while( n > len * basic) {
        n -= len * basic
        len++
        basic *= 10
        start *= 10
    }
    start += (n - 1) / len
    const str = String(start)
    return str[(n - 1) % len]
};