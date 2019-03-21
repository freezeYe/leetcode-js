/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 */

/**
 * @param {ListNod}
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var newList = new ListNode(0), 
        arrayList = new ListNode(0), 
        sum = 0, 
        tenOrNot = 0;
    newList.next = arrayList;
    
    while(l1 || l2 || tenOrNot !==0){
        sum = tenOrNot + (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
        l1 = (l1 !== null) ? l1.next :null;
        l2 = (l2 !== null) ? l2.next :null;
        tenOrNot = (sum>=10)? 1 : 0;
        
        arrayList.next = new ListNode(sum % 10);
        arrayList = arrayList.next;         
    }
       
    return newList.next.next;
};