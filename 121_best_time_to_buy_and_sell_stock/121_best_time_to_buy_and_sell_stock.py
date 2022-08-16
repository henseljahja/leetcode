import sys
from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        lowest_price: int = sys.maxsize
        max_profit: int = 0
        today_profit: int = 0

        for i in range(len(prices)):
            if prices[i] < lowest_price:
                lowest_price = prices[i]

            today_profit = prices[i] - lowest_price

            if today_profit > max_profit:
                max_profit = today_profit

        return max_profit
