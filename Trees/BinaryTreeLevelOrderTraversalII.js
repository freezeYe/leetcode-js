/**
 * 107.
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return []
  const traversal = []
  traverse(root,0,traversal)
  return traversal.reverse()
};

function traverse(root, curLevel, traversal) {
  if(!root) return
  if(!traversal[curLevel]) traversal[curLevel]= []
  traversal[curLevel].push(root.val)
  
  traverse(root.left, curLevel+1, traversal)
  traverse(root.right, curLevel+1, traversal)
}