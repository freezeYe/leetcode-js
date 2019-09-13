/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0
  const visitedRecord = {}
  let result = 1
  wordList.forEach(word => visitedRecord[word] === false)
  let queue = [beginWord]
  while (queue.length) {
    result++
    const tmpQ = []
    while (queue.length) {
      const start = queue.pop()
      for (let i = 0; i < wordList.length; i++) {
        if (visitedRecord[wordList[i]]) continue
        if (canTransformed(start, wordList[i])) {
          visitedRecord[wordList[i]] = true
          tmpQ.push(wordList[i])
          if (wordList[i] === endWord) return result
        }
      }
    }
    queue = tmpQ
  }
  return 0
};


function canTransformed(word, target) {
  let equalLength = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === target[i]) {
      equalLength++
    }
  }
  return word.length - equalLength === 1
}