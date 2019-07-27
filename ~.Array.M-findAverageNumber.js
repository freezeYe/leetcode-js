/**
 * 给定一个指定数组，数组数量不定，找出最接近平均数的数字。
 * 输入: [1,3,4,9,19]
 * 输出: 9
 */

/**
 * 计算平均值，遍历取最小绝对差值
 * 时间复杂度: O(N)
 * 空间复杂度: O(1)
 * @param {Array} arr 
 */
function findAverageNumber(arr) {
  let absMin = Infinity
  let result
  const avg = arr.reduce((all, num) => all + num, 0) / arr.length
  arr.forEach(num => {
    const compute = Math.abs(num - avg)
    if (compute < absMin) {
      absMin = compute
      result = num
    }
  })
  return result
}
findAverageNumber([1, 3, 4, 9, 19])