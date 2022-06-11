class Solution:
    def isValid(self, s: str) -> bool:
        hashParentheses = {"(": ")", "{": "}", "[": "]"}

        stackParentheses = []
        for chr in s:
            if chr in hashParentheses.keys():
                stackParentheses.append(hashParentheses.get(chr))
            elif len(stackParentheses) == 0 or stackParentheses.pop() != chr:
                return False
        return len(stackParentheses) == 0
