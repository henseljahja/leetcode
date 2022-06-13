#include <unordered_map>
class Solution
{
public:
    bool isAnagram(string s, string t)
    {
        if (s == t)
        {
            return true;
        }
        if (s.size() != t.size())
        {
            return false;
        }
        unordered_map<char, int> hashTable;
        for (int i = 0; i < s.size(); i++)
        {
            hashTable[s[i]]++;
            hashTable[t[i]]--;
        }
        for (auto &&j : hashTable)
        {
            if (j.second != 0)
            {
                return false;
            }
        }
        return true;
    }
};