// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0027.%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0.md

const arr = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;

const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i];
    }
  }
  return k;
}
console.log(removeElement(arr, val));