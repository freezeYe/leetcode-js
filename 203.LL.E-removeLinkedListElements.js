/**
 * 203
 * Remove all elements from a linked list of integers that have value val.
 * 输入: 1 2 6 3 4 6, val = 6
 * 输出: 1 2 3 4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let pointer = head,
        pre = null
    while(pointer) {
        if(pointer.val === val) {
            if(!pre) {
                head = pointer.next
                pointer = pointer.next
            }else {
                pointer = pointer.next
                pre.next = pointer
            }
        }else{
            pre = pointer
            pointer = pointer.next
        }
    }
    return head
};