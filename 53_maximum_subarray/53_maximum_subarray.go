package maximumsubarray

import "math"

func maxSubArray(nums []int) int {
	sum := 0
	maxSum := -math.MaxFloat64

	for _, val := range nums {
		sum += val
		maxSum = math.Max(float64(maxSum), float64(sum))

		if sum < 0 {
			sum = 0
		}
	}

	return int(maxSum)
}
