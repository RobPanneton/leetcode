const isValid = (s: string) => {
  let stack = [];
  let pairs: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    }
    if (pairs[s[i]] !== stack[stack.length - 1]) return false;
    stack.pop();
  }

  return stack.length === 0;
};
