/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
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
var isSymmetric = function(root) {
    if(!root) return true
    let result = true
    function dfs(left,right) {
        if(left && right) {
            if(left.val != right.val) {
                result = false
            }else {
                dfs(left.left,right.right)
                dfs(left.right,right.left)
            }
        }else if(left || right) result = false
    }
    if(root.left && root.right) dfs(root.left,root.right)
    else if(root.left || root.right) return false
    return result
};