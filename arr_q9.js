// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0035.%E6%90%9C%E7%B4%A2%E6%8F%92%E5%85%A5%E4%BD%8D%E7%BD%AE.md

let nums1 = [1, 3, 5, 6], target1 = 5;
// 输出: 2
let nums2 = [1, 3, 5, 6], target2 = 2;
// 输出: 1

let nums3 = [1, 3, 5, 6], target3 = 7;
// 输出: 4

let nums4 = [1, 3, 5, 6], target4 = 0;
// 输出: 0

const searchInsert = function (nums, target) {
  let l = 0, r = nums.length - 1, ans = nums.length;
  while (l <= r) {
    const mid = l + Math.floor((r - l) >> 1);
    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      ans = mid;
      r = mid - 1;
    }
  }
  return ans;
}


console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums3, target3));
console.log(searchInsert(nums4, target4));
