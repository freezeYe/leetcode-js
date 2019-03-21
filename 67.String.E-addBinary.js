/**
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 输入: a = '11', b = '1'
 * 输出: '100'
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let binarySum = '',
        lenA = a.length,
        lenB = b.length,
        record = 0
    while(lenA > 0 || lenB > 0) {
        const pA = a[--lenA] || 0,
              pB = b[--lenB] || 0
        if(pA == 1 && pB == 1) {
            binarySum = record + binarySum
            record = 1
        }else if(pA == 0 && pB == 0) {
            binarySum = record + binarySum
            record = 0
        }else {
            if(record == 1) binarySum = 0 + binarySum
            else binarySum = 1 + binarySum
        }
    }
    return record ? record + binarySum : binarySum
    
};