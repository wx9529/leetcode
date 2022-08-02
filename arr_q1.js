// https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/

const smallerNumbersThanCurrent = nums => {
  let arr = [...nums];
  arr = arr.sort((a, b) => a - b);
  let res = [];
  nums.forEach(x => {
    res.push(arr.indexOf(x));
  })
  return res;
}

const nums1 = [8, 1, 2, 2, 3];
const nums2 = [6, 5, 4, 8];
const nums3 = [7, 7, 7, 7];

console.log(smallerNumbersThanCurrent(nums1));
console.log(smallerNumbersThanCurrent(nums2));
console.log(smallerNumbersThanCurrent(nums3));