// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0034.%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%92%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BD%8D%E7%BD%AE.md

const nums = [5, 7, 7, 8, 8, 10], target = 8
const searchRange = function (nums, target) {
  const getLeftBorder = (nums, target) => {
    let left = 0, right = nums.length - 1;  // right = 5
    let leftBorder = -2;// 记录一下leftBorder没有被赋值的情况
    while (left <= right) {
      let middle = left + ((right - left) >> 1);  //2, 4, 3
      if (nums[middle] >= target) { // 寻找左边界，nums[middle] == target的时候更新right
        right = middle - 1; // 3 2
        leftBorder = right;  // 3 2
      } else {
        left = middle + 1;  // 3
      }
    }
    return leftBorder;
  }

  const getRightBorder = (nums, target) => {
    let left = 0, right = nums.length - 1;
    let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
    while (left <= right) {
      let middle = left + ((right - left) >> 1);
      if (nums[middle] > target) {
        right = middle - 1;
      } else { // 寻找右边界，nums[middle] == target的时候更新left
        left = middle + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  }

  let leftBorder = getLeftBorder(nums, target);
  let rightBorder = getRightBorder(nums, target);
  console.log('leftBorder', leftBorder);
  console.log('rightBorder', rightBorder);
  // 情况一
  if (leftBorder === -2 || rightBorder === -2) return [-1, -1];
  // 情况三
  if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
  // 情况二
  return [-1, -1];
};


console.log(searchRange(nums, target))