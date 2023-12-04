var isValid = function (s) {
  const bracketArray = s.split("");

  let bracketCounts = {
    "(": 0,
    ")": 0,
    "[": 0,
    "]": 0,
    "{": 0,
    "}": 0,
  };

  for (let i = 0; i < bracketArray.length; i++) {
    bracketCounts[bracketArray[i]]++;
    if (
      bracketArray[i] === ")" ||
      bracketArray[i] === "]" ||
      bracketArray[i] === "}"
    ) {
      const closingBracketIndex = Object.keys(bracketCounts).indexOf(
        bracketArray[i]
      );

      if (
        bracketArray[i] >
        bracketCounts[Object.keys(bracketCounts)[closingBracketIndex - 1]]
      ) {
        return false;
      }
    }

    console.log({ bracketCounts });
  }

  return true;
};

console.log(isValid("(([{}]))"));

//   Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
