import java.util.HashSet;

class Solution {
    public int longestPalindrome(String s) {
        HashSet<Character> setOfCh = new HashSet<Character>();
        int cnt = 0;

        for (char ch : s.toCharArray()) {
            if (!setOfCh.contains(ch)) {
                setOfCh.add(ch);
            } else {
                setOfCh.remove(ch);
                cnt++;
            }
        }
        if (!setOfCh.isEmpty()) {
            return cnt * 2 + 1;
        }
        return cnt * 2;
    }
}