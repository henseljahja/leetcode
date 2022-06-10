from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        mapDuplicate = {}
        for num in nums:
            if num in mapDuplicate:
                return True
            mapDuplicate[num] = 1

        return False
