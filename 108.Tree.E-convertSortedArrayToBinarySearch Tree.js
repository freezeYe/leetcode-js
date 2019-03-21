/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 */

var sortedArrayToBST = function(nums) {
    return sortedArrayToBSTHelper(0, nums.length);
    
    function sortedArrayToBSTHelper(start, end) {
        if(start >= end) return null;
        
        const middle = start + Math.floor((end - start) / 2);
        const currentNode = new TreeNode(nums[middle]);

        currentNode.left  = sortedArrayToBSTHelper(start, middle)
        currentNode.right = sortedArrayToBSTHelper(middle + 1, end);
        
        return currentNode;
    }
};