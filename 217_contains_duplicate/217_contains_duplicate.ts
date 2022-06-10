function containsDuplicate(nums: number[]): boolean {
  let hashDuplicate: Set<number> = new Set();

  for (let num of nums) {
    if (hashDuplicate.has(num)) {
      return true;
    }
    hashDuplicate.add(num);
  }
  return false;
}
