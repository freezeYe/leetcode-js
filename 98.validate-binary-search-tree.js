/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   const traversePath = inOrderTraverse(root)
//   for (let i = 0; i < traversePath.length - 1; i++) {
//     if (traversePath[i] > traversePath[i + 1]) return false
//   }
//   return true
// };

// function inOrderTraverse(node, traversePath = []) {
//   if (!node) return traversePath
//   inOrderTraverse(node.left, traversePath)
//   traversePath.push(node.val)
//   inOrderTraverse(node.right, traversePath)
//   return traversePath
// }

var isValidBST = function (root) {
  let prevData = -Infinity
  function checkValid(node) {
    if (!node) return true
    let isValid = checkValid(node.left)
    if (!isValid || prevData >= node.val) {
      return false
    }
    prevData = node.val
    isValid = checkValid(node.right)
    return isValid
  }
  return checkValid(root)
};

// var isValidBST = function (root, MAX = Infinity, MIN = -Infinity) {
//   if (!root) return true
//   if (root.val >= MAX || root.val <= MIN) return false
//   return isValidBST(root.left, root.val, MIN) && isValidBST(root.right, MAX, root.val)
// }


