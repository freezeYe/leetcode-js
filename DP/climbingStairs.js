/**
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 输入: 3
 * 输出: 3
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n
    let pre = 1, next = 2, i = 3
    while(i <= n) {
        const tmp = pre + next
        pre = next
        next = tmp
        i++
    }
    return next
};