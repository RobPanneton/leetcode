/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (
    word
      .split("")
      .every((char) => char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)
  )
    return true;
  if (word.length === 1) return true;

  if (
    word.split("")[0].charCodeAt(0) > 64 &&
    word.split("")[0].charCodeAt(0) < 91 &&
    word.split("").every((char, index) => {
      if (index === 0) return true;
      if (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) return true;
    })
  )
    return true;

  if (
    word
      .split("")
      .every((char) => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
  )
    return true;
  return false;
};

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.
