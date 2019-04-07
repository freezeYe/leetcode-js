/**
 * Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  let arr = new Array(26).fill(0);

  for (let t of tasks) {
    arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  arr.sort((a, b) => a - b);

  let i = 25;

  while (i >= 0 && arr[i] === arr[25]) i--;

  return Math.max(tasks.length, (arr[25] - 1) * (n + 1) + 25 - i);
}