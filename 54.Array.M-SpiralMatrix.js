/**
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
 * Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
 */

var spiralOrder = function(matrix) {
  let res = [];
 
  if (matrix.length == 0) {
         return res;
     }  
 
 let rowBegin =0;
 let rowEnd = matrix.length -1;
 let colBegin =0;
 let colEnd = matrix[0].length -1;
 
 while(rowBegin <= rowEnd && colBegin <= colEnd) {
     //right
     for(let i=colBegin;i<=colEnd;i++){
         res.push(matrix[rowBegin][i])
     }
     ++rowBegin;
     //bottom
     for(let i=rowBegin ;i<=rowEnd;i++) {
         res.push(matrix[i][colEnd])
     }
     --colEnd;
     //scan bottom right to left
     if (rowBegin <= rowEnd) {
         for(let i=colEnd; i>=colBegin;i--) {
             res.push(matrix[rowEnd][i])
         }
     }
     --rowEnd;
     //scan left to top
     if(colBegin <= colEnd){
          for(let i=rowEnd;i>= rowBegin; i--){
             res.push(matrix[i][colBegin])
         }
     }   
     ++colBegin;
  }
 
 return res;
};
