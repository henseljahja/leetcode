package validparentheses

func isValid(s string) bool {
	hashParentheses := map[rune]rune{
		'(': ')',
		'{': '}',
		'[': ']',
	}

	stackParentheses := []rune{}

	for _, chr := range s {
		if val, chrExist := hashParentheses[chr]; chrExist {
			stackParentheses = append(stackParentheses, val)
		} else if len(stackParentheses) == 0 || stackParentheses[len(stackParentheses)-1] != chr {
			return false
		} else {
			stackParentheses = stackParentheses[:len(stackParentheses)-1]
		}

	}
	return len(stackParentheses) == 0

}
