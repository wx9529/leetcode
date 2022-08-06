// https://leetcode.cn/problems/rotate-array

function reverse(nums, i, j) {
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}

const rotate = function (nums, k) {
  let n = nums.length;
  k %= n;
  if (k) {
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
  }
  return nums;
};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;

const nums2 = [-1, -100, 3, 99];
const k2 = 2;

console.log(rotate(nums1, k1));
console.log(rotate(nums2, k2));
