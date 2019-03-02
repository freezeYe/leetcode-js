/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (ie, from left to right, then right to left for the next level and alternate between).
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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    var result = [];
    var queue = [];
    queue.unshift(root);
    for(var level = 0; queue.length > 0; level++) {
        var nextQueue = [];
        result[level] = [];
        while(queue.length > 0) {
            var node = queue.pop();
            result[level].push(node.val);
            if(level % 2 > 0) {
                if(node.right) nextQueue.push(node.right);
                if(node.left) nextQueue.push(node.left);
            } else {
                if(node.left) nextQueue.push(node.left);
                if(node.right) nextQueue.push(node.right);
            }
        }
        queue = nextQueue;
    }
    return result;
};