package containsduplicate

func containsDuplicate(nums []int) bool {
	hashDup := make(map[int]int)
	for _, num := range nums {
		if hashDup[num] == 1 {
			return true
		}
		hashDup[num] = 1
	}
	return false
}
