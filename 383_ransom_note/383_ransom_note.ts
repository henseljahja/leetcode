function canConstruct(ransomNote: string, magazine: string): boolean {
  let constructedMap: Map<string, number> = new Map<string, number>();
  for (const char of magazine) {
    constructedMap.set(char, (constructedMap.get(char) || 0) + 1);
  }
  for (const char of ransomNote) {
    constructedMap.set(char, (constructedMap.get(char) || 0) - 1);
    if (constructedMap.get(char) || 0 < 0) {
      return false;
    }
  }
  return true;
}
