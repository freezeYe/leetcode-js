/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board.length || !board[0].length) return
  const m = board.length
  const n = board[0].length
  function modify(x, y) {
    board[x][y] = '1';
    const dir = [[0, -1], [0, 1], [1, 0], [-1, 0]]
    for (let v of dir) {
      const dx = x + v[0]
      const dy = y + v[1]
      if (dx >= 0 && dx < m && dy >= 0 && dy < n && board[dx][dy] === 'O') {
        modify(dx, dy)
      }
    }

  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i === m - 1 || j === n - 1)
        if (board[i][j] === 'O') modify(i, j)
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'
      if (board[i][j] === '1') board[i][j] = 'O'
    }
  }
};