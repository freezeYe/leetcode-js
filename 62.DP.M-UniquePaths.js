/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = new Array(n).fill(1)
    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            arr[j] += arr[j-1]
        }
    }
    return arr[n-1]
};