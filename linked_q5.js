// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4.md


const getListLen = haed => {
  let len = 0, cur = head;
  while (cur) {
    cur = cur.next;
    len++;
  }
  return len;
}
const getIntersectionNode = (headA, headB) => {
  let curA = headA, curB = headB;
  lenA = getListLen(headA);
  lenB = getListLen(headB);
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB;
  while (i-- > 0) {
    curA = curA.next;
  }
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
}