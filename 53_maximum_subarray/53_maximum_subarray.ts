function maxSubArray(nums: number[]): number {
  let sum: number = 0;
  let maxSum: number = Number.MIN_SAFE_INTEGER;

  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
    maxSum = Math.max(sum, maxSum);

    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}
