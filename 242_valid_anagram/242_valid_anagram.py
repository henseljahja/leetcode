class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if s == t:
            return True
        if len(s) != len(t):
            return False
        hashTable = {}

        for i in range(len(s)):
            if s[i] not in hashTable:
                hashTable[s[i]] = 0
            if t[i] not in hashTable:
                hashTable[t[i]] = 0
            hashTable[s[i]] += 1
            hashTable[t[i]] -= 1

        for i in hashTable.keys():
            if hashTable[i] != 0:
                return False

        return True
