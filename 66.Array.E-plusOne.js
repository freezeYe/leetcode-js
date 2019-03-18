/**
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits,index) {
    if(index === undefined) index = digits.length-1
    if (digits[index] === 9) {
        digits[index] = 0
        if(index === 0) {
            digits.unshift(1)
        }
        else plusOne(digits,index-1)
    }else {
        digits[index] = digits[index]+1
    }
    return digits
};