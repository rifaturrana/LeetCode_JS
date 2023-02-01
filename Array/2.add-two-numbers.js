/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let previousHead = new ListNode();
  let head = previousHead;
  while (l1 || l2 || carry) {
    var val1 = 0;
    var val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;
    let curr_head = new ListNode(digit);
    previousHead.next = curr_head;
    previousHead = curr_head;
  }
  return head.next;
};
// @lc code=end
