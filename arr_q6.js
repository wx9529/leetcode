// https://leetcode.cn/problems/find-pivot-index

const nums1 = [1, 7, 3, 6, 5, 6]
// output = 3

const nums2 = [1, 2, 3]
// output = -1

const nums3 = [2, 1, -1]
// output = 0

const pivotIndex = nums => {
  const sum = nums.reduce((a, b) => a + b);
  let leftSum = 0, rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    rightSum = sum - leftSum + nums[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
}

console.log(pivotIndex(nums1));
console.log(pivotIndex(nums2));
console.log(pivotIndex(nums3));
