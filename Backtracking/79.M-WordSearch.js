/**
 * Given a 2D board and a word, find if the word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cell, 
 * where "adjacent" cells are those horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 * 
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length
    const column = board[0].length
    function existDFS(point, i, j, record) {
        if(i > -1 && j > -1 && i < row && j < column && board[i][j] !==null &&
           word[point] === board[i][j]) {
            if(point === word.length - 1) {
                return true
            }
            const ch = board[i][j]
            board[i][j] = null
            if(existDFS(point + 1, i - 1, j)) return true
            if(existDFS(point + 1, i + 1, j)) return true
            if(existDFS(point + 1, i , j - 1)) return true
            if(existDFS(point + 1, i , j + 1)) return true
            board[i][j] = ch
        }
    }
    for(let i=0; i<row; i++) {
        for(let j=0; j<column; j++) {
            if(existDFS(0 , i, j)) return true
        }
    }
    return false
};