/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 */

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const m = new Map()
  function helper(node, m) {
    if (!node) return null
    if (m.has(node)) return m.get(node)
    const n = new Node(node.val, null, null)
    m.set(node, n)
    n.next = helper(node.next, m)
    n.random = helper(node.random, m)
    return n
  }
  return helper(head, m)
};