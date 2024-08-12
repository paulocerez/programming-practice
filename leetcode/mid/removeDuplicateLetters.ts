// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
// the smallest in lexicographical order
// among all possible results.

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

// every letter should appear only once

function removeDuplicates(word: string): string {
  // compare values through ASCII value
  //   track character counts
  // stack for building resulting string
  //

  const count: number[] = Array(26).fill(0);
  const result: string[] = [];
  const inResult: boolean[] = Array(26).fill(0);
  const charCodeOfA = "a".charCodeAt(0);

  for (let char of word) {
    count[char.charCodeAt(0) - charCodeOfA]++;
  }

  return "";
}

removeDuplicates("pailalao"); // return: ailop
// p -> added to newWord ["p"], a -> compared with p, inserted before p
