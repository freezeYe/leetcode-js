/**
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
 * or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = []
    function helper(node) {
        if(!node) {
            result.push('null')
            return null
        }
        result.push(node.val)
        helper(node.left)
        helper(node.right)
    }
    helper(root)
    return result.join()
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(',')
    let index = 0
    function helper() {
        if(index > data.length - 1 || data[index] === 'null') return null
        const node = new TreeNode(data[index])
        index++
        node.left = helper()
        index++
        node.right = helper()
        return node
    }
    return helper()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */