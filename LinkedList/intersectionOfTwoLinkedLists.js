/**
 * 160
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * For example, the following two linked lists:
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null
    let stepA = headA,
        stepB = headB
    while(stepA !== stepB) {
        stepA = (stepA !== null) ? stepA.next : headB
        stepB = (stepB !== null) ? stepB.next : headA
    }
    return stepA
};
