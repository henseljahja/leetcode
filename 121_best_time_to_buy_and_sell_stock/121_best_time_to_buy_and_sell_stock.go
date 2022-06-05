package besttimetobuyandsellstock

import "math"

func maxProfit(prices []int) int {
	lowestPrice := math.MaxInt
	todayProfit := 0
	maxProfit := 0

	for i := 0; i < len(prices); i++ {
		if lowestPrice > prices[i] {
			lowestPrice = prices[i]
		}
		todayProfit = prices[i] - lowestPrice

		if todayProfit > maxProfit {
			maxProfit = todayProfit
		}
	}
	return maxProfit
}
