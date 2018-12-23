/**
 * Reverse a singly linked list.
 * 输入：1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!(head && head.next)) return head
    let pre = null,
        next = null
    while(head.next) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    head.next = pre
    return head
};

var reverseListRecursive = function(head, prev = null) {
    if(!head) return prev
    const next = head.next
    head.next = prev
    return reverseList(next,head)
};