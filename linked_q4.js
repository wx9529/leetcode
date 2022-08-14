https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0141.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8.md

const hasCycle = head => {
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
}
