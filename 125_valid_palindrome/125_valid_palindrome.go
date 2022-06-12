package validpalindrome

import "unicode"

func isPalindrome(s string) bool {
	n := len(s)
	l := 0
	r := n - 1
	for l < r {

		if !unicode.IsLetter(rune(s[l])) && !unicode.IsDigit(rune(s[l])) {
			l++
			continue
		}
		if !unicode.IsLetter(rune(s[r])) && !unicode.IsDigit(rune(s[r])) {
			r--
			continue
		}
		if unicode.ToLower(rune(s[l])) != unicode.ToLower(rune(s[r])) {
			return false
		}
		l++
		r--
	}
	return true
}
