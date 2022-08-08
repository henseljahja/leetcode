class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        map<int, int> hashMap;

        for (int i = 0; i < nums.size(); i++)
        {
            int B = target - nums[i];
            if (hashMap.find(B) != hashMap.end())
            {
                return {hashMap[B], i};
            }
            hashMap[nums[i]] = i;
        }
        return {};
    }
};