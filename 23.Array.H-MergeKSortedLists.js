/**
 * Merge k sorted linked lists and return it as one sorted list.Analyze and describe its complexity.
 * Input:
 * [
 *  1 -> 4 -> 5,
 *  1 -> 3 -> 4,
 *  2 -> 6
 * ]
 * Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null
  if (lists.length === 1) return lists[0]
  function helper(lists, left, right) {
    if (left < right) {
      const middle = Math.trunc((left + right) / 2)
      return merge(helper(lists, left, middle), helper(lists, middle + 1, right))
    }
    return lists[left]
  }
  function merge(list1, list2) {
    let head = null
    let curNode = null
    while (list1 && list2) {
      let minNode = null
      if (list1.val < list2.val) {
        minNode = list1
        list1 = list1.next
      } else {
        minNode = list2
        list2 = list2.next
      }
      if (!head) {
        head = minNode
        curNode = head
      } else {
        curNode.next = minNode
        curNode = curNode.next
      }
    }
    if (head) {
      if (list1) curNode.next = list1
      if (list2) curNode.next = list2
    } else {
      if (list1) head = list1
      if (list2) head = list2
    }

    return head
  }
  return helper(lists, 0, lists.length - 1)
};
