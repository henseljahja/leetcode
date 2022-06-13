function isAnagram(s: string, t: string): boolean {
  if (s == t) {
    return true;
  }

  if (s.length != t.length) {
    return false;
  }
  let hashTable = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!hashTable.has(s.charAt(i))) {
      hashTable.set(s.charAt(i), 0);
    }
    if (!hashTable.has(t.charAt(i))) {
      hashTable.set(t.charAt(i), 0);
    }
    hashTable.set(s.charAt(i), hashTable.get(s.charAt(i)) + 1);
    hashTable.set(t.charAt(i), hashTable.get(t.charAt(i)) - 1);

    for (const key in hashTable) {
      if (hashTable[key] != 0) {
        return false;
      }
    }
    return true;
  }
}
