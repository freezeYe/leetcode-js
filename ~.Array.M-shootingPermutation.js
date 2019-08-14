/**
 * 一个人投篮sum次，命中n球：加入命中为1，不命中为0，那么一次投篮的组合可以表示成n个0加sum-n个1
 * 请列举所有可能出现的情况
 */

function shootingPermutation(num) {
  if(num === 0) return []
  if(num === 1) return ['1', '0']
  return [].concat(...['1', '0'].map(x=> shootingPermutation(num-1).map(y=> x + y)))
}
