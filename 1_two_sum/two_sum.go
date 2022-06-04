func twoSum(nums []int, target int) []int {
    hashmap := map[int]int{}
    // Target = A + B
    // Target - A = B
    for index, A := range(nums){
        B := target - A
        _, present := hashmap[B]
        if present{
            return []int{hashmap[B],index}
        }
        hashmap[A] = index
    }
    return nil
}
