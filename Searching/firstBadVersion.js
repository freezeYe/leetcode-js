/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let bottom = 1,
            top = n
        while(isBadVersion(top) && isBadVersion(top-1)) {
            const middle = parseInt((top + bottom) / 2)
            if(isBadVersion(middle)) top = middle
            else bottom = middle
        }
        return top
    };
};