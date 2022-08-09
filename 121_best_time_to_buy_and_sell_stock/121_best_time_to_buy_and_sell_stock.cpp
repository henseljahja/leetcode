#include <bits/stdc++.h>
class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        int lowestPrice = INT_MAX;
        int todayProfit = 0;
        int maxProfit = 0;

        for (int i = 0; i < prices.size(); i++)
        {
            if (prices[i] < lowestPrice)
            {
                lowestPrice = prices[i];
            }

            todayProfit = prices[i] - lowestPrice;

            if (maxProfit < todayProfit)
            {
                maxProfit = todayProfit;
            }
        }
        return maxProfit;
    }
};