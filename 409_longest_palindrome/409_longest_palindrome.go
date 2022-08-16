package longestpalindrome

func longestPalindrome(s string) int {
	setOfCh := map[rune]struct{}{}
	cnt := 0

	for _, ch := range s {
		if _, present := setOfCh[ch]; !present {
			setOfCh[ch] = struct{}{}
		} else {
			delete(setOfCh, ch)
			cnt++
		}
	}
	if len(setOfCh) > 0 {
		return cnt*2 + 1
	}
	return cnt * 2

}
