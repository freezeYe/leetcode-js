/**
 * 
 * The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . 
 * The integer division should truncate toward zero.} s
 * Input: "3+2*2"
 * Output: 7
 * Input: " 3/2 "
 * Output: 1
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let curValue = '',
    op = '+',
    res = 0
  const stack = []
  for (let i in s) {
    if (!isNaN(parseInt(s[i]))) {
      curValue += s[i]
    }
    if ((i == s.length - 1) || (isNaN(parseInt(s[i])) && s[i] !== ' ')) {
      if (op === '+') stack.push(parseInt(curValue))
      if (op === '-') stack.push(parseInt(op + curValue))
      if (op === '*' || op === '/') {
        const tmp = op === '*' ? stack.pop() * curValue : Math.trunc(stack.pop() / curValue)
        stack.push(tmp)
      }
      op = s[i]
      curValue = ''
    }
  }
  while (stack.length) {
    res += stack.pop()
  }
  return res
};
