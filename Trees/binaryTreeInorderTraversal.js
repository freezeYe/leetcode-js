/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return []
    const traversal = []
    inorder(traversal, root)
    return traversal
};

function inorder(traversal, root) {
    if(!root) return
    inorder(traversal, root.left)
    traversal.push(root.val)
    inorder(traversal, root.right)
}