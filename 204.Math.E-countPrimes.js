/**
 * Count the number of prime numbers less than a non-negative number, n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let sumPrime = 0
    const prime = new Array(n)
    for(let i=2;i<n;i++) {
        if(!prime[i]) {
            sumPrime++
            for(let j=1; i*j<n;j++) {
                prime[i*j] = true
            }
        }
    }
    return sumPrime
};