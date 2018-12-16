/**
 * 给定9*9方格，判断是否满足数独游戏规则。（行、列、3*3块不允许有相同数字出现）
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    return row(board)&&column(board)&&block(board)
};
const column = (board)=> {
    let index = 0
    const set = new Set()
    while(index < 9) {
        set.clear()
        for(let arr of board) {
            const value = arr[index]
            if(value === '.') continue
            else if(set.has(value)) return false
            set.add(value)
        }
        index++
    }
    return true
}
const row = (board)=> {
    const set = new Set()
    for(let arr of board) {
        set.clear()
        for(let value of arr) {
            if(value === '.') continue
            else if(set.has(value)) return false
            set.add(value)
        }
    }
    return true
}
const block = (board)=> {
    const set = new Set()
    const compareBlock = (row,column)=> {
        set.clear()
        for(let i=row;i<row+3;i++) {
            for(let j=column;j<column+3;j++) {
                const value = board[i][j]
                if(value === '.') continue
                else if(set.has(value)) return false
                set.add(value)
            }
        }
        return true
    }
    for(let i=0;i<9;i+=3) {
        for(let j=0; j < 9;j+=3) {
            if(!compareBlock(i,j)) return false
        }
    }
    return true
}