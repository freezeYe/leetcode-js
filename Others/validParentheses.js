/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    for(let i=0;i<s.length;i++) {
        if(s[i]==='(' || s[i]==='{' || s[i]==='[') {
            stack.push(s[i])
        }else {
            if(stack.pop() !== match[s[i]]) return false
        }
    }
    return stack.length === 0
};

const match = {
    ')' : '(',
    '}' : '{',
    ']' : '['
}