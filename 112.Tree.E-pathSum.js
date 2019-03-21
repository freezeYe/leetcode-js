/**
 * 112
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such 
 * that adding up all the values along the path equals the given sum.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root == null) {
        return false;
    }
    if (root.left == null && root.right == null) {
        return (root.val == sum);
    }
    if (root.left == null) {
        return hasPathSum(root.right, sum - root.val);
    }
    if (root.right == null) {
        return hasPathSum(root.left, sum - root.val);
    }
    return (hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val));
};