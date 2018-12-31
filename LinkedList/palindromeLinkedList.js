/**
 * Given a singly linked list, determine if it is a palindrome.
 * 输入: 1->2->2->1
 * 输出: true
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
var isPalindrome = function(head) {
    if(!(head && head.next)) return true
    let pre = head,
        next = head.next,
        len = 1
    while(next) {
        next.pre = pre
        pre = next
        next = next.next
        len++
    }
    len = parseInt(len / 2)
    let end = pre
    while(len > 0) {
        if(end.val === head.val) {
            len--
            end = end.pre
            head = head.next
        }else return false
    }
    return true
};