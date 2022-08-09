// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0922.%E6%8C%89%E5%A5%87%E5%81%B6%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84II.md

// 输入：[4,2,5,7]
// 输出：[4,5,2,7]

const nums = [4, 2, 5, 7];

const sortArrayByParityII = function (nums) {
  const n = nums.length;
  let evenIndex = 0, oddIndex = 0;
  const even = new Array(Math.floor(n / 2));
  const odd = new Array(Math.floor(n / 2));

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) even[evenIndex++] = nums[i];
    else odd[oddIndex++] = nums[i];
  }

  let index = 0;
  for (let i = 0; i < even.length; i++) {
    nums[index++] = even[i];
    nums[index++] = odd[i];
  }
  return nums;
};

console.log(sortArrayByParityII(nums));