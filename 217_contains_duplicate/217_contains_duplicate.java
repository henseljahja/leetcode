import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> hashDuplicate = new HashSet<Integer>();
        for (Integer num : nums) {
            if (hashDuplicate.contains(num)) {
                return true;
            }
            hashDuplicate.add(num);
        }
        return false;

    }
}