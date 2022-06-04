function maxProfit(prices: number[]): number {
    let lowestPrice: number = Number.MAX_SAFE_INTEGER;
    let todayProfit: number = 0;
    let maxProfit: number = 0;
    
    for (let i: number = 0; i < prices.length; i++){
        if (lowestPrice > prices[i]){
            lowestPrice = prices[i];
        }
        
        todayProfit = prices[i] - lowestPrice;
        
        if (todayProfit > maxProfit){
            maxProfit = todayProfit;
        }
    }
    return maxProfit;
};
