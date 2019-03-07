/**
 * Given a string containing digits from 2-9 inclusive, 
 * return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 * Note that 1 does not map to any letters.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return  []
    const result = []
    function combination(point, str='') {
        const letter = phoneMap[digits[point]]
        for(let i=0;i<letter.length;i++) {
            const localStr = str + letter[i]
            if(point < digits.length - 1) {
                combination(point + 1, localStr)
            }else {
                result.push(localStr)
            }
        }
    }
    combination(0)
    return result
};

const phoneMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}