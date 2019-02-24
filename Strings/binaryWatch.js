/**
 * 401*
 * 
 */

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const match = []
    for(let i=0 ; i<=num; i++) {
        const hours = sum(i, [1, 2, 4, 8]),
              minutes = sum(num - i, [1, 2, 4, 8, 16, 32])
        for(let h of hours) {
            if(h < 12) {
                for(let m of minutes) {
                    if(m < 60)
                        match.push(String(h) + (m < 10 ? ':0' : ':') + String(m))
                }
            }
        }
    }
    return match
};

function sum(len, led) {
    const res = []
    helper(len, 0, 0, res, led)
    return res
}
function helper(len, index, value, res, arr) {
    if(len < 1) {
        res.push(value)
        return
    }
    for(let i=index; i<arr.length; i++) {
        helper(len-1, i+1, value+arr[i], res, arr)
    }
}