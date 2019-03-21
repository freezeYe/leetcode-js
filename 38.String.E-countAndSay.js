/**
 * The count-and-say sequence is the sequence of integers with the first five terms as following
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n,res = '1') {
    if(n == 1) return res
    else return countAndSay(--n,res.toString().match(/(\d)(\1)*/g).reduce((a,b)=> a+b.length+b[0],''))
};