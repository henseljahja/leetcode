import sys
from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum, max_num = 0, -sys.maxsize - 1
        for i in range(len(nums)):
            sum += nums[i]
            max_num = max(max_num, sum)
            if sum < 0:
                sum = 0
        return max_num
