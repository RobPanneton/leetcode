// no bueno, parentheses need to be closed in the correct order
// const isValid = (s) => {
//   let count = {
//     round: 0,
//     square: 0,
//     curly: 0,
//   };

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") count.round++;
//     if (s[i] === ")") count.round--;
//     if (s[i] === "[") count.square++;
//     if (s[i] === "]") count.square--;
//     if (s[i] === "{") count.curly++;
//     if (s[i] === "}") count.curly--;

//     if (Object.values(count).some((c) => c < 0)) return false;
//   }

//   return Object.values(count).every((c) => c === 0);
// };

const isValid = (s) => {
  if (s.length % 2 !== 0) return false;

  const open = "([{";
  const closing = ")]}";

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (closing.includes(s[i])) {
      if (open[closing.indexOf(s[i])] !== stack[stack.length - 1]) return false;
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

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
