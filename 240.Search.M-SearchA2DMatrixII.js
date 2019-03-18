/**
 * 
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false
    const row = matrix.length - 1,
          column = matrix[0].length - 1
    let x = row,
        y = 0
    while(x >= 0 && y <= column) {
        if(matrix[x][y] === target) return true
        else if(matrix[x][y] > target) x--
        else y++
    }
    return false
};