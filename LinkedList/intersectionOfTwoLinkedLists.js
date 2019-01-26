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
    let lenA = calculateLength(headA),
        lenB = calculateLength(headB),
        currentA = headA,
        currentB = headB
    let m = Math.abs(lenA - lenB)
    if(lenA > lenB) {
        while(m > 0) {
            m--
            currentA = currentA.next
        }
    }
    if(lenA < lenB) {
        while(m > 0) {
            m--
            currentB = currentB.next
        }
    }
    while(currentA) {
        if(currentA === currentB) return currentA
        currentA = currentA.next
        currentB = currentB.next
    }
    return null
};


function calculateLength(head) {
    let len = 0
    while(head) {
        len++
        head = head.next
    }
    return len
}

