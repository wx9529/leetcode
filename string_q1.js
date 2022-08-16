// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0925.%E9%95%BF%E6%8C%89%E9%94%AE%E5%85%A5.md
const isLongPressedName = function (name, typed) {
  let i = 0, j = 0;
  const m = name.length, n = typed.length;
  while (i < m && j < n) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else {
      if (j === 0) return false;
      while (j < n - 1 && typed[j] === typed[j - 1]) j++;
      if (name[i] === typed[j]) {
        i++;
        j++;
      } else {
        return false;
      }
    }
  }

  if (i < m) return false;
  while (j < n) {
    if (typed[j] === typed[j - 1]) j++;
    else return false;
  }
  return true;
}