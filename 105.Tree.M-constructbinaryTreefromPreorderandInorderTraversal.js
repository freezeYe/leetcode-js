/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 */
var buildTree = function(preorder, inorder) {
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) {
            return null;
        }
        
        let value = preorder[p1];
        let pos = inorder.indexOf(value);
        let numToLeft = pos - i1;
        let root = new TreeNode(value);
        
        root.left = helper(p1 + 1, p1 + numToLeft + 1, i1, pos - 1);
        root.right = helper(p1 + numToLeft + 1, p2, pos + 1, i2);
        
        return root;
    }
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};