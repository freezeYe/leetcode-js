/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const make_graph = (prerequisites) => {
  const graph = {}
  for (let cources of prerequisites) {
    const preCource = cources[1]
    const cource = cources[0]
    if (!graph[preCource]) graph[preCource] = []
    graph[preCource].push(cource)
  }
  return graph
}
const calIndegree = (graph) => {
  const indegree = {}
  Object.values(graph).forEach(cources => {
    cources.forEach(c => {
      if (indegree[c]) indegree[c] += 1
      else indegree[c] = 1
    })
  })
  return indegree
}
var canFinish = function (numCourses, prerequisites) {
  const graph = make_graph(prerequisites)
  const indegreeNode = calIndegree(graph)
  for (let i = 0; i < numCourses; i++) {
    let j = 0;
    for (; j < numCourses; j++) {
      if (!indegreeNode[j]) break
    }
    if (j === numCourses) return false
    indegreeNode[j] = -1
    if (graph[j]) {
      for (let n of graph[j]) {
        indegreeNode[n]--
      }
    }
  }
  return true
};


// @lc code=end

