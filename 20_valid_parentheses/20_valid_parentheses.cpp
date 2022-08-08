class Solution
{
public:
	bool isValid(string s)
	{

		map<char, char> hashParentheses = {{'(', ')'}, {'[', ']'}, {'{', '}'}};
		stack<char> stackParentheses;

		for (auto ch : s)
		{
			if (hashParentheses.count(ch))
			{
				stackParentheses.push(hashParentheses[ch]);
			}
			else if (stackParentheses.empty() || stackParentheses.top() != ch)
			{
				return false;
			}
			else
			{
				stackParentheses.pop();
			}
		}
		return stackParentheses.empty();
	}
};
