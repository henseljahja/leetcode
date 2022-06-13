package validanagram

func isAnagram(s string, t string) bool {
	if s == t {
		return true
	}
	if len(s) != len(t) {
		return false
	}

	hashTable := make(map[byte]int)
	for i := 0; i < len(s); i++ {
		hashTable[s[i]]++
		hashTable[t[i]]--
	}
	for _, v := range hashTable {
		if v != 0 {
			return false
		}
	}
	return true
}
