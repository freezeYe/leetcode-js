/**
 * 202
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
 *  or it loops endlessly in a cycle which does not include 1. 
 * Those numbers for which this process ends in 1 are happy numbers.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const or = new Set()
    const g = (t)=> {
        if(t === 1) return true
        if(or.has(t)) return false
        or.add(t)
        const r = (()=> {
            let d = 0
           while(t) {
              d += (t % 10)**2
              t = parseInt(t / 10)
           }
            return d
        })()
        return g(r)
    }
    return g(n)
};