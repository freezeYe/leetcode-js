/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0]
    if(strs.length === 0) return ""
    let prefix = ''
    outer:
    for(var i=0;i<strs[0].length;i++) {
        let index = 1    
        while(index < strs.length) {
            if(strs[index-1][i] !== strs[index][i]) break outer
            index++
        }
        prefix += strs[0][i]
    }
    return prefix
};