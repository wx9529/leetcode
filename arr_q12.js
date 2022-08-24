// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0977.%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E5%B9%B3%E6%96%B9.md
const sortedSquares = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(0);
  let i = 0, j = n - 1, k = n - 1;
  while (i <= j) {
    let left = nums[i] * nums[i];
    let right = nums[j] * nums[j];
    if (left < right) {
      res[k--] = right;
      j--;
    } else {
      res[k--] = left;
      i++;
    }
  }
  return res;
}

let nums1 = [-4, -1, 0, 3, 10]
// [0, 1, 9, 16, 100]
let nums2 = [-7, -3, 2, 3, 11]
// [4, 9, 9, 49, 121]

console.log(sortedSquares(nums1));
console.log(sortedSquares(nums2));

