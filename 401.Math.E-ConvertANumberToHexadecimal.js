/**
 * Given an integer, write an algorithm to convert it to hexadecimal. 
 * For negative integer, two’s complement method is used.
 */

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const hex =['a', 'b', 'c', 'd', 'e', 'f']
    const max = 2 ** 32
    let   res = ''
    if(num < 0) num = max + num
    while(num) {
        const remain = num % 16
        if(remain < 10) res = remain + res
        else res = hex[remain - 10] + res
        num = parseInt(num / 16)
    }
    return res || '0'
}

