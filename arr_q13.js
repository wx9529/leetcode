// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.md

const midSubArrayLen = function (target, nums) {
  const len = nums.length;
  let l = r = sum = 0;
  res = len + 1;
  while (r < len) {
    sum += nums[r++];
    while (sum >= target) {
      res = res < r - l ? res : r - l;
      sum -= nums[l++];
    }
  }
  return res > len ? 0 : res;
}