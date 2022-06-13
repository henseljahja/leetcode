class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Target = A + B
        // B = Target - A
        Map<Integer, Integer> hashMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++){
            int A = nums[i];
            int B = target - A;
            if (hashMap.containsKey(B)){
                return new int[] {hashMap.get(B),i};
            }
            hashMap.put(A,i);
        }
        return null;
    }
}
