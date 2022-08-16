function longestPalindrome(s: string): number {
  let setOfCh: Set<string> = new Set<string>();
  let cnt: number = 0;

  for (let ch of s) {
    if (!setOfCh.has(ch)) {
      setOfCh.add(ch);
    } else {
      setOfCh.delete(ch);
      cnt++;
    }
  }
  if (setOfCh.size !== 0) {
    return cnt * 2 + 1;
  }
  return cnt * 2;
}
