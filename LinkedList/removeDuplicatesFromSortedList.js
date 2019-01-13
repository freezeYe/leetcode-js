/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 */

/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
    let curNode = head
    while(curNode && curNode.next) {
        if(curNode.next.val === curNode.val) {
            curNode.next = curNode.next.next
        }else{
            curNode = curNode.next
        }
    }
    return head
};