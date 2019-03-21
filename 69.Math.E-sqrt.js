/**
 * 69
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let bottom = 0,
      top = x,
      middle = Math.ceil(x / 2)
  while(middle**2 !== x) {
      const sqrt = middle**2
      if(sqrt < x && (middle+1)**2 > x) return middle
      if(sqrt > x) {
          top = middle
      }else {
          bottom = middle
      }
      middle = Math.ceil((top + bottom) / 2)
  }
  return middle
};