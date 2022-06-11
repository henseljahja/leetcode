import java.util.HashMap;
import java.util.Stack;

class Solution {
  public boolean isValid(String s) {
    HashMap<Character, Character> hashParentheses = new HashMap<Character, Character>() {
      {
        put('(', ')');
        put('{', '}');
        put('[', ']');
      }
    };

    Stack<Character> stackParentheses = new Stack<Character>();
    for (char chr : s.toCharArray()) {
      if (hashParentheses.containsKey(chr)) {
        stackParentheses.push(hashParentheses.get(chr));
      } else if (stackParentheses.size() == 0 || stackParentheses.pop() != chr) {
        return false;
      }
    }
    return stackParentheses.size() == 0;
  }
}