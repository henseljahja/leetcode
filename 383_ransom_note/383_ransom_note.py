from typing import Dict


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        reconstructedMap: Dict[str, int] = {}
        for char in magazine:
            reconstructedMap[char] = reconstructedMap.get(char, 0) + 1
        for char in ransomNote:
            reconstructedMap[char] = reconstructedMap.get(char, 0) - 1
            if reconstructedMap[char] < 0:
                return False
        return True
