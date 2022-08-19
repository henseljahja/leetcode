function romanToInt(s: string): number {
  const symbolMap: Map<string, number> = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result: number = 0;
  for (let i: number = 0; i < s.length - 1; i++) {
    if (symbolMap.get(s.charAt(i)) < symbolMap.get(s.charAt(i + 1))) {
      result -= symbolMap.get(s.charAt(i));
    } else {
      result += symbolMap.get(s.charAt(i));
    }
  }
  result += symbolMap.get(s.charAt(s.length - 1));
  return result;
}
