/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};