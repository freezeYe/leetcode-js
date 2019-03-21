/**
 * Given an array of characters, compress it in-place.
 * The length after compression must always be smaller than or equal to the original array.
 * Every element of the array should be a character (not int) of length 1.
 * After you are done modifying the input array in-place, return the new length of the array.
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0,
        pointer = 0    
    while(index < chars.length) {
        let sum = 1
        chars[pointer] = chars[index]
        while(chars[pointer]===chars[++index]) {
            sum++
        }
        if(sum > 1) {
            String(sum).split('').forEach(s=> {
                chars[++pointer] = s
            })   
        }
        pointer++
    }
    return pointer
};