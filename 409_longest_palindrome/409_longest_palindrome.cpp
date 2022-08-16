class Solution
{
public:
    int longestPalindrome(string s)
    {

        unordered_set<char> setOfCh;
        int cnt = 0;

        for (auto &ch : s)
        {
            if (setOfCh.find(ch) == setOfCh.end())
            {
                setOfCh.insert(ch);
            }
            else
            {
                setOfCh.erase(ch);
                cnt++;
            }
        }
        if (!setOfCh.empty())
        {
            return cnt * 2 + 1;
        }
        return cnt * 2;
    }
};