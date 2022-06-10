#include <unordered_map>
using namespace std;
class Solution
{
public:
	bool containsDuplicate(vector<int> &nums)
	{
		unordered_map<int, int> hashDuplicate;

		for (auto &&num : nums)
		{
			if (hashDuplicate.find(num) != hashDuplicate.end())
			{
				return true;
			}
			hashDuplicate[num] = 1;
		}
		return false;
	}
};