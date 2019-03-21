/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let cur = 1,
        rem = n
    while(rem >= cur) {
        rem -= cur
        cur++
    }
    return n===0 ? 0 : cur - 1
};