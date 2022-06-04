class Solution {
    public int maxProfit(int[] prices) {
        int lowestPrice = Integer.MAX_VALUE;
        int todayProfit = 0;
        int maxProfit = 0;
        for (int i = 0; i < prices.length; i++){
            if(prices[i] < lowestPrice){
                lowestPrice = prices[i];
            }
            
            todayProfit = prices[i] - lowestPrice;
            
            if (todayProfit > maxProfit){
                maxProfit = todayProfit;
            }
        }
        return maxProfit;
    }
}
