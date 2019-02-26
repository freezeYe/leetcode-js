/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes. 
 * Please note here we are talking about the node number and not the value in the nodes.
 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 * Input: 1->2->3->4->5->NULL
 * Output: 1->3->5->2->4->NULL
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
var oddEvenList = function(head) {
    if(!head) return null
    let oddStep = head,
        even = head.next,
        evenStep = head.next
    while(oddStep.next && evenStep.next) {
        oddStep.next = evenStep.next
        oddStep = oddStep.next
        evenStep.next = oddStep.next
        evenStep = evenStep.next
    }
    oddStep.next = even
    return head
};