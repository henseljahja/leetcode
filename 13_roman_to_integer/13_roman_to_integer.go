func romanToInt(s string) int {
	symbolMap := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	result := 0

	for i := 0; i < len(s)-1; i++ {
		if symbolMap[s[i]] < symbolMap[s[i+1]] {
			result -= symbolMap[s[i]]
		} else {
			result += symbolMap[s[i]]
		}
	}

	result += symbolMap[s[len(s)-1]]
	return result

}