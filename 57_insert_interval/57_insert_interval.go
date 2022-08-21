package insertinterval

func insert(intervals [][]int, newInterval []int) [][]int {
	res := [][]int{}

	for _, interval := range intervals {
		if newInterval[1] < interval[0] {
			res = append(res, newInterval)
			newInterval = interval
		} else if newInterval[0] > interval[1] {
			res = append(res, interval)
		} else {
			newInterval[0] = min(newInterval[0], interval[0])
			newInterval[1] = max(newInterval[1], interval[1])
		}
	}
	res = append(res, newInterval)
	return res
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}
