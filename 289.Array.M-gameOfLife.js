/**
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
 */


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const row_len = board.length
  const column_len = board[0].length
  const dx = [-1,-1,-1,0,0,1,1,1]
  const dy = [-1,0,1,-1,1,-1,0,1]
  for(let i=0; i<row_len; i++) {
      for(let j=0; j<column_len; j++) {
          let record = 0
          for(let k=0; k<8; k++) {
              const x = i + dx[k]
              const y = j + dy[k]
              if(x >= 0 && x < row_len && y >= 0 && y < column_len && ( board[x][y] === 1 || board[x][y] === 2) ) {
                  record++
              }
          }
          if(board[i][j] && (record < 2 || record > 3)) board[i][j] = 2
          else if(!board[i][j] && record === 3) board[i][j] = 3
      }
  }
  for(let i=0; i<row_len; i++) {
      for(let j=0; j<column_len; j++) {
          board[i][j] %= 2
      }
  }
};