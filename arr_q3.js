// https://leetcode.cn/problems/unique-number-of-occurrences/

const uniqueOccurrences = arr => {
  let map = new Map();
  arr.forEach(x => {
    map.set(x, (map.get(x) || 0) + 1);
  })
  return map.size === new Set(map.values()).size;
}

const arr1 = [1, 2, 2, 1, 1, 3];
const arr2 = [1, 2];
const arr3 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

console.log(uniqueOccurrences(arr1));
console.log(uniqueOccurrences(arr2));
console.log(uniqueOccurrences(arr3));


