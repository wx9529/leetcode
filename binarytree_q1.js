// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0129.%E6%B1%82%E6%A0%B9%E5%88%B0%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%E6%95%B0%E5%AD%97%E4%B9%8B%E5%92%8C.md

const sumNumbers = function (root) {
  const listToInt = path => {
    let sum = 0;
    for (let num of path) {
      sum = sum * 10 + num;
    }
    return sum;
  }
  const recur = root => {
    if (root.left === null && root.right === null) {
      res += listToInt(path);
      return;
    }
    if (root.left != null) {
      path.push(root.left.val);
      recur(root.left);
      path.pop();
    }
    if (root.right != null) {
      path.push(root.right.val);
      recur(root.right);
      path.pop();
    }
    return;
  }

  const path = new Array();
  let res = 0;
  if (root == null) return 0;
  path.push(root.val);
  recur(root);
  return res;
}