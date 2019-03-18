/**
 * Given an array of strings, group anagrams together.
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
    ]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const codesum = {},
          result = []
    for(let i=0; i<strs.length; i++) {
        const str = strs[i]
        let charCode = 0
        for(let j=0; j<str.length; j++) {
            charCode += (str.charCodeAt(j)**4)
        }
        if(codesum[charCode]) codesum[charCode].push(str)
        else {
            codesum[charCode] = [str]
            result.push(codesum[charCode])
        }
    }
    return result
};