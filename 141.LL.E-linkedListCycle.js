/**
 * Given a linked list, determine if it has a cycle in it.
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!(head && head.next)) return false
    let t = true
    let fast = head,
        slow = head
    while(fast) {
        fast = fast.next
        if(fast) fast = fast.next
        else return false
        slow = slow.next
        if(slow === fast) return true
    }
    return false
};