/**
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * 输入: s = "loveleetcode",
 * 输出: return 2.
 */


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const cache = {}
    let result = -1
     s.split('').forEach((i,index,arr)=> {
         if(!cache[i]) {
             if(arr.lastIndexOf(i) !== index) cache[i] = 1
             else {
                 if(result === -1) result = index
             }
         }
     })
     return result
 };