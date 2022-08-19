import java.util.HashMap;

class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> symbolMap = new HashMap<Character, Integer>() {
            {
                put('I', 1);
                put('V', 5);
                put('X', 10);
                put('L', 50);
                put('C', 100);
                put('D', 500);
                put('M', 1000);
            }
        };

        int result = 0;

        for (int i = 0; i < s.length() - 1; i++) {
            if (symbolMap.get(s.charAt(i)) < symbolMap.get(s.charAt(i + 1))) {
                result -= symbolMap.get(s.charAt(i));
            } else {
                result += symbolMap.get(s.charAt(i));
            }
        }
        result += symbolMap.get(s.charAt(s.length() - 1));
        return result;
    }
}