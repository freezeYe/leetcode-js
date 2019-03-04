/**
 * Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result
    function find(node) {
       if(result) return result
       if(node.left) find(node.left)
        k--
        if(k == 0) result = node.val
       if(node.right) find(node.right)
    }
    find(root)
    return result
};
