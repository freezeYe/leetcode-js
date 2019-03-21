/**
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 * initially, all next pointers are set to null. 
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null
    if(root.left) root.left.next = root.right
    if(root.right) root.right.next = root.next ? root.next.left : null
    connect(root.left)
    connect(root.right)
    return root
};