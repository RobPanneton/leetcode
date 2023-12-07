const { performance } = require("perf_hooks");

const isAnagramSplit = (s, t) =>
  s.split("").sort().join() === t.split("").sort().join();

const isAnagramTemp = (s, t) => {
  if (s.length !== t.length) return false;
  let temp = s;
  for (let i = 0; i < t.length; i++) temp = temp.replace(t.charAt(i), "");
  return temp.length === 0;
};

const isAnagramArray = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  var freq = new Array(26).fill(0);
  for (var i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return false;
    }
  }

  return true;
};

const isAnagramMap = (s, t, map = new Map()) => {
  if (s.length !== t.length) return false;

  for (const c of s) map.set(c, (map[c] || 0) + 1);

  for (const c of t) {
    if (!map.has(c)) return false;
    if (map[c] <= 0) return false;
    map.set(c, map[c] - 1);
  }

  for (const [char, count] of map) if (count === 0) return false;

  return true;
};

const runTest = (fn, arg1, arg2) => {
  console.log("Running test: ", fn.name, `. With arguments: ${arg1}, ${arg2}`);
  let start = performance.now();
  fn(arg1, arg2);
  let end = performance.now();
  console.log("Duration: ", end - start);
};

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("not", "one"));
// console.log(isAnagram("a", "ab"));

runTest(isAnagramSplit, "anagram", "nagaram");
runTest(isAnagramSplit, "not", "one");
runTest(isAnagramSplit, "a", "ab");
runTest(
  isAnagramSplit,
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting",
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting"
);

runTest(isAnagramTemp, "anagram", "nagaram");
runTest(isAnagramTemp, "not", "one");
runTest(isAnagramTemp, "a", "ab");
runTest(
  isAnagramTemp,
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting",
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting"
);

runTest(isAnagramArray, "anagram", "nagaram");
runTest(isAnagramArray, "not", "one");
runTest(isAnagramArray, "a", "ab");
runTest(
  isAnagramArray,
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting",
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting"
);

runTest(isAnagramMap, "anagram", "nagaram");
runTest(isAnagramMap, "not", "one");
runTest(isAnagramMap, "a", "ab");
runTest(
  isAnagramMap,
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting",
  "thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting"
);

// RESULTS :

// split
// Running test:  isAnagramSplit . With arguments: anagram, nagaram
// Duration:  0.04619999974966049
// Running test:  isAnagramSplit . With arguments: not, one
// Duration:  0.007699999958276749
// Running test:  isAnagramSplit . With arguments: a, ab
// Duration:  0.0069000013172626495
// Running test:  isAnagramSplit . With arguments: thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting, thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting
// Duration:  0.04580000042915344

// temp
// Running test:  isAnagramTemp . With arguments: anagram, nagaram
// Duration:  0.05950000137090683
// Running test:  isAnagramTemp . With arguments: not, one
// Duration:  0.012699998915195465
// Running test:  isAnagramTemp . With arguments: a, ab
// Duration:  0.007899999618530273
// Running test:  isAnagramTemp . With arguments: thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting, thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting
// Duration:  0.040699999779462814

// array
// Running test:  isAnagramArray . With arguments: anagram, nagaram
// Duration:  0.1664000004529953
// Running test:  isAnagramArray . With arguments: not, one
// Duration:  0.0284000001847744
// Running test:  isAnagramArray . With arguments: a, ab
// Duration:  0.002299997955560684
// Running test:  isAnagramArray . With arguments: thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting, thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting
// Duration:  0.021699998527765274

// map
// Running test:  isAnagramMap . With arguments: anagram, nagaram
// Duration:  0.19929999858140945
// Running test:  isAnagramMap . With arguments: not, one
// Duration:  0.031199999153614044
// Running test:  isAnagramMap . With arguments: a, ab
// Duration:  0.003400001674890518
// Running test:  isAnagramMap . With arguments: thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting, thisisamuchlongerstringthatwewillusefortestestingthisisamuchlongerstringthatwewillusefortestesting
// Duration:  0.18459999933838844

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
