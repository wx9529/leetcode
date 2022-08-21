// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0100.%E7%9B%B8%E5%90%8C%E7%9A%84%E6%A0%91.md

const isSameTree = (p, q) => {
  if (p == null && q == null)
    return true;
  if (p == null || q == null)
    return false;
  if (p.val != q.val)
    return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

