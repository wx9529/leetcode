// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0844.%E6%AF%94%E8%BE%83%E5%90%AB%E9%80%80%E6%A0%BC%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2.md

const backspaceComapre = (s, t) => {
  const getString = s => {
    let arrS = [];
    for (let char of s) {
      char === '#' ? arrS.pop() : arrS.push(char);
    }
    return arrS.join('');
  }
  return getString(s) === getString(t);
}

const S1 = "ab#c", T1 = "ad#c"
console.log(backspaceComapre(S1, T1));
// true

const S2 = "ab##", T2 = "c#d#"
console.log(backspaceComapre(S2, T2));
// true

const S3 = "a##c", T3 = "#a#c"
console.log(backspaceComapre(S3, T3));
// true

const S4 = "a#c", T4 = "b"
console.log(backspaceComapre(S4, T4));
// false