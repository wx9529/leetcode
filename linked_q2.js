// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0234.%E5%9B%9E%E6%96%87%E9%93%BE%E8%A1%A8.md

const isPalindrome = function (head) {
  const reverseList = head => {
    let prev = null;
    let curr = head;
    while (curr != null) {
      let nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }
    return prev;
  }

  // 如果为空或者仅有一个节点，返回true
  if (!head && !head.next) return true;
  let slow = head;
  let fast = head;
  let pre = head;
  // 1,2,3,4
  while (fast != null && fast.next != null) {
    pre = slow; // 记录slow的前一个结点
    slow = slow.next;
    fast = fast.next.next;
  }
  pre.next = null; // 分割两个链表
  // 前半部分
  let cur1 = head;
  // 后半部分。这里使用了反转链表
  let cur2 = reverseList(slow);
  while (cur1 != null) {
    if (cur1.val != cur2.val) return false;
    // 注意要移动两个结点
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return true;
}