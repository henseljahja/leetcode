package ransomnote

func canConstruct(ransomNote string, magazine string) bool {
	constructedMap := make(map[rune]int)
	for _, v := range magazine {
		constructedMap[v]++
	}
	for _, v := range ransomNote {
		constructedMap[v]--
		if constructedMap[v] < 0 {
			return false
		}
	}
	return true
}
