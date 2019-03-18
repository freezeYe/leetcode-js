/**
 * Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
      return;
  }

  let row = matrix.length;
  let col = matrix[0].length;

  let rowAffect = false;
  let colAffect = false;

  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          if (matrix[i][j] == 0) {
              matrix[i][0] = 0;
              matrix[0][j] = 0;
              
              if (i == 0) {
                  rowAffect = true;
              }

              if (j == 0) {
                  colAffect = true;
              }
          }   
      }   
  }   

  for (let i = 1; i < row; i++) {
      for (let j = 1; j < col; j++) {
          if (matrix[i][0] == 0 || matrix[0][j] == 0) {
              matrix[i][j] = 0;
          }   
      }   
  }
  
  if (rowAffect) {
      for (let i = 0; i < col; i++) {
          matrix[0][i] = 0;
      }   
  }   

  if (colAffect) {
      for (let i = 0; i < row; i++) {
          matrix[i][0] = 0;
      }
  }
};