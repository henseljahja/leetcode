import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isAnagram(String s, String t) {
        if (s == t) {
            return true;
        }
        if (s.length() != t.length()) {
            return false;
        }

        HashMap<Character, Integer> hashTable = new HashMap<Character, Integer>();

        for (int i = 0; i < s.length(); i++) {
            if (!hashTable.containsKey(s.charAt(i))) {
                hashTable.put(s.charAt(i), 0);
            }
            if (!hashTable.containsKey(t.charAt(i))) {
                hashTable.put(t.charAt(i), 0);
            }
            hashTable.put(s.charAt(i), hashTable.get(s.charAt(i)) + 1);
            hashTable.put(t.charAt(i), hashTable.get(t.charAt(i)) - 1);
        }
        for (Map.Entry<Character, Integer> v : hashTable.entrySet()) {
            if (v.getValue() != 0) {
                return false;
            }
        }
        return true;
    }
}