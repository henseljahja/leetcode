function isAlphaNumeric(chr: string) {
  return /^[a-z0-9]+$/gi.test(chr);
}
function isPalindrome(s: string): boolean {
  let n: number = s.length;
  let l: number = 0;
  let r: number = n - 1;

  while (l < r) {
    if (!isAlphaNumeric(s.charAt(l))) {
      l++;
      continue;
    }
    if (!isAlphaNumeric(s.charAt(r))) {
      r--;
      continue;
    }
    if (s.charAt(l).toLowerCase() != s.charAt(r).toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
