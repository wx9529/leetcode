// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0205.%E5%90%8C%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2.md

const isIsomorphic = function (s, t) {
  let len = s.length;
  if (len === 0) return true;
  let maps = new Map();
  let mapt = new Map();
  for (let i = 0, j = 0; i < len; i++, j++) {
    if (!maps.has(s[i])) {
      maps.set(s[i], t[j]);
    }
    if (!mapt.has(t[j])) {
      mapt.set(t[j], s[i]);// mapt保存 t[j] 到 s[i]的映射
    }

    if (maps.get(s[i]) !== t[j] || mapt.get(t[j]) !== s[i]) {
      return false;
    }
  }
  return true;
}