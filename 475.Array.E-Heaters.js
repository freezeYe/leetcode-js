/**
 * 
 * Input: [1,2,3],[2]
 * Output: 1
 * Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.} houses 
 */

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let res = 0, hl = 0, hr = 0;
  houses.sort((a,b)=>a-b);
  heaters.sort((a,b)=>a-b);
  const n = heaters.length - 1;
  for(let i = 0; i < houses.length; i++){
    while(houses[i] > heaters[hr] && hr < n && hl < n){
      hr++;
      if (hl < hr - 1) hl++;
    };
    res = Math.max(res, Math.min(
      Math.abs(houses[i] - heaters[hl]), 
      Math.abs(heaters[hr] - houses[i])));
  }
  return res;
};