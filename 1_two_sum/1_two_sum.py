class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexNum = {}

        for i, b in enumerate(nums):
            # target = a + b, -> target - b = a
            a = target - b

            if a in indexNum:
                # i --> index B
                return [indexNum[a], i]
            indexNum[b] = i
