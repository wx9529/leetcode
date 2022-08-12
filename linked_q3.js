// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0143.%E9%87%8D%E6%8E%92%E9%93%BE%E8%A1%A8.md

const reorderList = head => {
  const reverseList = head => {
    let prev = null;
    let curr = head;
    let nxt = null;
    while (curr != null) {
      nxt = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nxt;
    }
    return prev;
  }

  let fast = head, slow = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let right = slow.next;
  slow.next = null;
  right = reverseList(right);
  let left = head;

  while (right != null) {
    let curLeft = left.next;
    left.next = right;
    left = curLeft;

    let curRight = right.next;
    right.next = left;
    right = curRight;
  }
}