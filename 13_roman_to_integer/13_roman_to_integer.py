class Solution:
    def romanToInt(self, s: str) -> int:
        symbolMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }

        cnt = 0

        for i in range(len(s) - 1):
            if symbolMap[s[i]] < symbolMap[s[i + 1]]:
                cnt -= symbolMap[s[i]]
            else:
                cnt += symbolMap[s[i]]
        cnt += symbolMap[s[-1]]
        return cnt
