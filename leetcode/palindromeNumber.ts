// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = (x: number): boolean => {
  let str = x.toString();
  let secondHalf = str.slice(Math.ceil(str.length / 2));
  let firstHalf = str.slice(0, Math.floor(str.length / 2));

  return firstHalf === secondHalf.split("").reverse().join("");
};

console.log(isPalindrome(302203)); // true

// This function does the job without converting x into a string

const isPalindromeInt = (x: number): boolean => {
  // Special case: If x is negative or ends with a zero (except for zero itself), it can't be a palindrome.
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let reversed = 0;
  let originalX = x;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return originalX === reversed;
};

console.log(isPalindromeInt(121)); // true
console.log(isPalindromeInt(-121)); // false (negative numbers are not palindromes)
console.log(isPalindromeInt(10)); // false (numbers ending with zero are not palindromes)
