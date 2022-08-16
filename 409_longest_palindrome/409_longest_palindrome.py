class Solution:
    def longestPalindrome(self, s: str) -> int:
        setOfCh = set()
        cnt = 0
        
        for ch in s:
            if ch not in setOfCh:
                setOfCh.add(ch)
            else:
                setOfCh.remove(ch)
                cnt+=1
        if len(setOfCh) > 0:
            return cnt * 2 + 1
        else:
            return cnt * 2