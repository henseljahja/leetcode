import java.util.HashMap;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> constructedMap = new HashMap<>();
        for (char chr : magazine.toCharArray()) {
            constructedMap.put(chr, constructedMap.getOrDefault(chr, 0) + 1);
        }
        for (char chr : ransomNote.toCharArray()) {
            constructedMap.put(chr, constructedMap.get(chr));
            if (constructedMap.getOrDefault(chr, 0) < 0) {
                return false;
            }
        }
        return true;
    }
}