function isValid(s: string): boolean {
  const hashParentheses: Map<string, string> = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let stackParentheses: any[] = [];
  for (const chr of s) {
    if (hashParentheses.has(chr)) {
      stackParentheses.push(hashParentheses.get(chr));
    } else if (stackParentheses.length === 0 || stackParentheses.pop() != chr) {
      return false;
    }
  }
  return stackParentheses.length === 0;
}
