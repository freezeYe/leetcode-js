/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
 * You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length == 0 || grid[0].length == 0) return 0
    const visited = new Array(grid.length),
          rowLen = grid.length,
          columnLen = grid[0].length
    let res = 0
    function recordIslandDFS(row, column) {
        if(!visited[row]) visited[row] = []
        if(row < 0 || row > rowLen - 1) return
        if(column < 0 || column > columnLen - 1) return
        if(grid[row][column] !== '1' || visited[row][column]) return
        visited[row][column] = true
        recordIslandDFS(row - 1, column)
        recordIslandDFS(row, column - 1)
        recordIslandDFS(row + 1, column)
        recordIslandDFS(row, column + 1)
    }
    for(let i=0; i<rowLen; i++) {
        for(let j=0; j<columnLen; j++) {
            if(!visited[i]) visited[i] = []
            if(grid[i][j] === '1' && !visited[i][j]) {
                recordIslandDFS(i,j)  
                res++
            }
        }
    }
    return res
};