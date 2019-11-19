/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let res = 0
  const visited = {}
  for (let i = 0; i < M.length; i++) {
    if (visited[i]) continue
    traverse(i)
    res++
  }

  function traverse(index) {
    visited[index] = true
    for (let i = 0; i < M.length; i++) {
      if (!M[index][i] || visited[i]) continue
      traverse(i)
    }
  }

  return res
};