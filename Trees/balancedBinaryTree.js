/**
 * 110
 * Given a binary tree, determine if it is height-balanced.
   For this problem, a height-balanced binary tree is defined as:
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
var isBalanced = function(root) {
  if(root === null) return true
  return !!balanced(root, 0)
};

function balanced(root, level) {
  if(root === null) return level
  const maxLeftDepth = balanced(root.left, level + 1)
  const maxRightDepth = balanced(root.right, level + 1)
  if(maxLeftDepth === false || maxRightDepth === false) return false   
  if(Math.abs(maxLeftDepth - maxRightDepth) < 2) return Math.max(maxLeftDepth,                maxRightDepth)
  return false
}

