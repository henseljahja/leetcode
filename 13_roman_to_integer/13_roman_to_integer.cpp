class Solution
{
public:
    int romanToInt(string s)
    {
        unordered_map<char, int> symbolMap = {{'I', 1},
                                              {'V', 5},
                                              {'X', 10},
                                              {'L', 50},
                                              {'C', 100},
                                              {'D', 500},
                                              {'M', 1000}};
        int result = 0;
        for (int i = 0; i < s.length() - 1; i++)
        {
            if (symbolMap[s[i]] < symbolMap[s[i + 1]])
            {
                result -= symbolMap[s[i]];
            }
            else
            {
                result += symbolMap[s[i]];
            }
        }
        result += symbolMap[s.back()];
        return result;
    }
};