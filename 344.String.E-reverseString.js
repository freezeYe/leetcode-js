/**
 * Write a function that takes a string as input and returns the string reversed.
 * 输入: "hello"
 * 输出: "olleh"
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString1 = function(s) {
    return s.split('').reverse().join('')
};
var reverseString2 = function(s) {
    let str = ''
    for(let i=s.length-1;i>=0;i--) {
        str += s[i]
    }
    return str
};