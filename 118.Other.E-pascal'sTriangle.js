/**
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows < 1) return []
    const arr = new Array(numRows)
    arr[0] = [1]
    for(let i=1;i<numRows;i++) {
        const tmp = new Array(i+1)
        for(let j=0;j<=i;j++) {
            tmp[j] = (arr[i-1][j-1] || 0) + (arr[i-1][j] || 0)
        }
        arr[i] = tmp
    }
    return arr
};