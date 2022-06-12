# [125. Valid Palindrome](<https://leetcode.com/problems/valid-palindrome/>)

### C++

```
class Solution
{
public:
    bool isPalindrome(string s)
    {
        int n = s.length();
        int l = 0;
        int r = n - 1;

        while (l < r)
        {
            if (!isalnum(s[l]))
            {
                l++;
                continue;
            }
            if (!isalnum(s[r]))
            {
                r--;
                continue;
            }
            if (tolower(s[l]) != tolower(s[r]))
            {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
};
```

### Go

```
package validpalindrome

import "unicode"

func isPalindrome(s string) bool {
 n := len(s)
 l := 0
 r := n - 1
 for l < r {

  if !unicode.IsLetter(rune(s[l])) && !unicode.IsDigit(rune(s[l])) {
   l++
   continue
  }
  if !unicode.IsLetter(rune(s[r])) && !unicode.IsDigit(rune(s[r])) {
   r--
   continue
  }
  if unicode.ToLower(rune(s[l])) != unicode.ToLower(rune(s[r])) {
   return false
  }
  l++
  r--
 }
 return true
}

```

### Java

```
class Solution {
    public boolean isPalindrome(String s) {
        int n = s.length();
        int l = 0;
        int r = n - 1;
        while (l < r) {
            if (!Character.isLetterOrDigit(s.charAt(l))) {
                l++;
                continue;
            }
            if (!Character.isLetterOrDigit(s.charAt(r))) {
                r--;
                continue;
            }
            if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
}
```

### Python

```
class Solution:
    def isPalindrome(self, s: str) -> bool:
        n = len(s)
        l = 0
        r = n - 1
        while l < r:
            if not s[l].isalnum():
                l += 1
                continue
            if not s[r].isalnum():
                r -= 1
                continue
            if s[l].lower() != s[r].lower():
                return False
            r -= 1
            l += 1
        return True

```

### TypeScript

```
function isAlphaNumeric(chr: string) {
  return /^[a-z0-9]+$/gi.test(chr);
}
function isPalindrome(s: string): boolean {
  let n: number = s.length;
  let l: number = 0;
  let r: number = n - 1;

  while (l < r) {
    if (!isAlphaNumeric(s.charAt(l))) {
      l++;
      continue;
    }
    if (!isAlphaNumeric(s.charAt(r))) {
      r--;
      continue;
    }
    if (s.charAt(l).toLowerCase() != s.charAt(r).toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

```
