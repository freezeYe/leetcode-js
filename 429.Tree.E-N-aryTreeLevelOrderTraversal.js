/**
 * Given an n-ary tree, return the level order traversal of its nodes' values. 
 * (ie, from left to right, level by level).
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    function traverseRecursive(root, level) {
        if(root) {
            if(!result[level]) result[level] = []
            result[level].push(root.val)
            if(root.children) {
                root.children.forEach(n=> traverseRecursive(n, level + 1))
            }
        }
    }
    traverseRecursive(root, 0)
    return result
};