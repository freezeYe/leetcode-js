//基数排序
const bucketSort = (arr, radix = 10) => {
  arr = [...arr]
  let K = Math.ceil(Math.log10(Math.max(...arr)))
  let bucket = Array(10).fill(0).map(_ => [])
  for (let i = 0; i < K; i++) {
      arr.forEach((value) => {
          bucket[parseInt((value) / (radix ** i)) % radix].push(value)
      })
      arr = bucket.reduce((a, b) => {
          return [...a, ...b]
      })
      bucket = bucket.map(_ => [])
  }
  return arr
}

console.log(bucketSort([21, 234, 1, 563, 34, 23]))