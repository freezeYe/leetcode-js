/**
 * Given n points in the plane that are all pairwise distinct, 
 * a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let res = 0
    for(let i=0; i<points.length; i++) {
        let obj = {}
        for(let j=0; j<points.length; j++) {
            const a = points[i][0] - points[j][0]
            const b = points[i][1] - points[j][1]
            const c = a*a + b*b
            obj[c] = obj[c] ? obj[c] + 1 : 1
        }
        Object.values(obj).forEach(n=> res += n * (n - 1))
    }
    return res
};