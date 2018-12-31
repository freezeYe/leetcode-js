/**
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * 输入: 1->2->4, 1->3->4
 * 输出: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = null,
        pre = null
    while(l1 && l2) {
        const node = {next: null}
        if(l1.val > l2.val) {
            node.val = l2.val
            l2 = l2.next
        }else {
            node.val = l1.val
            l1 = l1.next
        }
        if(pre) pre.next = node
        pre = node
        if(!head) head = node
    }
    if(l1) {
        if(pre) pre.next = l1
        else  head = l1
    }else {
        if(pre) pre.next = l2
        else head = l2
    }
    return head
};