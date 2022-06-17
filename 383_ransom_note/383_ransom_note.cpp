
#include <unordered_map>
#include <string>

using namespace std;
class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {
        unordered_map<char, int> reconstructedMap;
        for (auto &&val : magazine)
        {
            reconstructedMap[val]++;
        }
        for (auto &&val : ransomNote)
        {
            reconstructedMap[val]--;
            if (reconstructedMap[val] < 0)
            {
                return false;
            }
        }
        return true;
    }
};