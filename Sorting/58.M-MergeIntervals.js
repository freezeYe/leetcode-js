/**
 * Given a collection of intervals, merge all overlapping intervals.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(!intervals.length) return []
    const res = []
    intervals.sort((a,b)=> a.start - b.start)
    intervals.forEach((item,index)=> {
        if(index ===  0) {
            res.push(item)
        }else {
            const end = res[res.length - 1]
            if(end.end < item.start) res.push(item)
            else {
                end.end = end.end > item.end ? end.end : item.end
            }
        }
    })
    return res
};