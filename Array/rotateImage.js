/**
 * You are given an n x n 2D matrix representing an image.
 * Rotate the image by 90 degrees (clockwise).
 * Given input matrix = 
 *  [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
*  rotate the input matrix in-place such that it becomes:
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]
 */

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length
    matrix.reverse().forEach((item,index,arr)=> {
        let i = index,
            j = index
        while(j < len) {
            [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
            j++
        }
    })
};