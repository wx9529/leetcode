// https://leetcode.cn/problems/valid-mountain-array/
const validMountainArray = arr => {
  if (arr.length < 3) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left < arr.length && arr[left] < arr[left + 1]) left++;
  while (right > 0 && arr[right] < arr[right - 1]) right--;
  if (left === right && left !== 0 && right !== arr.length - 1) return true;
  return false;
};

const arr1 = [2, 1]
const arr2 = [3, 5, 5]
const arr3 = [0, 3, 2, 1]
console.log(validMountainArray(arr1));
console.log(validMountainArray(arr2));
console.log(validMountainArray(arr3));

