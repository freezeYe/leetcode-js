/**
 * Sort a linked list in O(n log n) time using constant space complexity.
 * Example 1:
 *
 * Input: 4->2->1->3
 * Output: 1->2->3->4
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
var sortList = function (head) {
  if (!head || head.next == null) return head
  let slow = head
  let fast = head
  let prev = null
  while (fast && fast.next) {
    prev = slow
    fast = fast.next.next
    slow = slow.next
  }
  prev.next = null
  const left = sortList(head)
  const right = sortList(slow)
  return merge(left, right)
};

function merge(left, right) {
  const head = new ListNode(0)
  let pointer = head

  while (left && right) {
    if (left.val < right.val) {
      pointer.next = left
      left = left.next
    } else {
      pointer.next = right
      right = right.next
    }
    pointer = pointer.next
  }

  if (left) pointer.next = left
  if (right) pointer.next = right

  return head.next
}


