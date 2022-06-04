function twoSum(nums: number[], target: number): number[] {
    // Target = A + B
    // B = Target - A
    const hashMap: Map<number,number> = new Map();
    for (let i = 0; i< nums.length; i++){
        let A: number = nums[i];
        let B: number = target - A;
        if (hashMap.has(B)){
            return [hashMap.get(B),i];
        }
        hashMap.set(A,i);
    }
    return null;
};

