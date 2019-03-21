/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
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
var levelOrder = function(root) {
    if(!root) return []
    return tranverse_queue([root],[])
};

const tranverse_queue = (queue_tmp,queue_result)=> {
    if(!queue_tmp.length) return queue_result
    const _tmp = [],
          _result = []
    queue_tmp.forEach(n=> {
        _result.push(n.val)
        if(n.left) _tmp.push(n.left)
        if(n.right) _tmp.push(n.right)
    })
    queue_result.push(_result)
    return tranverse_queue(_tmp,queue_result)
}