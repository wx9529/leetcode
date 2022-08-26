// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.md

const generateMatrix = function (n) {
  let startX = 0;
  let startY = 0;
  let loop = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  let res = new Array(n).fill(0).map(() => {
    return new Array(n).fill(0);
  })
  while (loop--) {
    let row = startX, col = startY;

    for (; col < startY + n - offset; col++) {
      res[row][col] = count++;
    }
    for (; row < startX + n - offset; row++) {
      res[row][col] = count++;
    }
    for (; col > startY; col--) {
      res[row][col] = count++;
    }
    for (; row > startX; row--) {
      res[row][col] = count++;
    }
    startX++;
    startY++;

    offset += 2;

  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
}

console.log(generateMatrix(4));
