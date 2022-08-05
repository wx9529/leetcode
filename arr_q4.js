// https://leetcode.cn/problems/move-zeroes/

const moveZeroes = nums => {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  for (let j = slow; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
};

const arr = [0, 3, 0, 1, 0, 3, 12];
console.log(moveZeroes(arr));
