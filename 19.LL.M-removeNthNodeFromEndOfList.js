/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 输入: 1->2->3->4->5, and n = 2.
 * 输出: 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let root = head
    let first = head,
        end = head
    while(n > 0) {
        end = end.next
        n--
    }
    if(end == null) {
        root = root.next
    }else {
        while(end.next !== null) {
            head = head.next
            end = end.next
        }
        head.next = head.next.next
    }
    return root
};