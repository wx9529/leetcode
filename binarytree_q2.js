// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/1382.%E5%B0%86%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E5%8F%98%E5%B9%B3%E8%A1%A1.md
const balanceBST = function (root) {
  const res = [];
  const traversal = root => {
    if (!root) return null;
    traversal(root.left);
    res.push(root.val);
    traversal(root.right);
  }
  const getTree = (nums, left, right) => {
    if (left > right) return null;
    let mid = left + ((right - left) >> 1);
    let root = new TreeNode(nums[mid]);
    root.left = getTree(nums, left, mid - 1);
    root.right = getTree(nums, mid + 1, right);
    return root;
  }

  traversal(root);
  return getTree(res, 0, res.length - 1);
}