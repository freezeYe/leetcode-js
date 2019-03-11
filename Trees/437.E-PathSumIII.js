/**
 * You are given a binary tree in which each node contains an integer value.
 * Find the number of paths that sum to a given value.
 * The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
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
 * @return {number}
 */
var pathSum = function(root, sum) {
    let res = 0
    function helper(node , value) {
        if(!node) return
        if(node.val - value === 0) res++
        helper(node.left, value - node.val)
        helper(node.right, value - node.val)
    }
    function recursive(node) {
        if(!node) return
        helper(node, sum)
        recursive(node.left, sum)
        recursive(node.right, sum)
    }
    recursive(root)
    return res
};