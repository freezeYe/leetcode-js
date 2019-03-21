/**
 * 168
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *  1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  const code = "A".charCodeAt() - 1
  let excelSheet = '' 
  while(n > 0) {
    const remainder = n % 26
    const charCode = code + (remainder > 0 ? remainder : 26)
    excelSheet = String.fromCharCode(charCode) + excelSheet
    n = Math.ceil(n / 26) - 1
  }
  return excelSheet
};