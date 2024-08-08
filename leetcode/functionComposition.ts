// 2629. Function Composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// Constraints:

// -1000 <= x <= 1000
// 0 <= functions.length <= 1000
// all functions accept and return a single integer

type IntToIntFunc = (x: number) => number;

function compose(functions: IntToIntFunc[]): IntToIntFunc {
  return function (x: number): number {
    return functions.reduceRight((acc, func) => func(acc), x);
  };
}

console.log(compose([(x) => x * 30 + 15, (x) => x * 64])(1));
// [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1.000 -> 1 * 10 - 10 * 10 - 100 * 10

// alternative with less runtime

// type F = (x: number) => number;

// function composeFunction(functions: F[]): F {
//   let result;

//   // [...functions] leads to the creation of a copy of the functions array using the spread operator
// //   let stack = [...functions];

// //   return function (x) {
// //     result = x;

// //     while (stack.length > 0) {
// //       let fun = stack.pop();

// //       result = fun(result);
// //     }

// //     return result;
// //   };
// }

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
