// /**
//  * @param {string} s
//  * @return {boolean}
//  */

var isPalindrome = function (s) {
  // guard clause: if s is 1 char, always return true
  if (s.length === 1) return true;

  // filter out non alphabetic characters
  const filteredStringArray = s
    .split(" ")
    .filter(
      (char) =>
        (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ||
        (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
    );
  for (let i = 0; i < filteredStringArray.length / 2; i++) {
    if (
      filteredStringArray[i] !==
      filteredStringArray[filteredStringArray.length - i - 1]
    )
      return false;
  }

  return true;
};

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
