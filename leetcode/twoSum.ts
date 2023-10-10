// 1. Two Sum
// Easy
// Topics
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


// const twoSum = (nums: number[], target: number): number[] => {
// 	// target value should be the sum of two values in the array -> return their indices
// 	let store: number[] = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] < target) {
// 				if (nums[j] + nums[i] === target) {
// 					store.push(nums[i], nums[j])
// 				}
// 			}
// 		}
// 	}
// 	return store
// }



// console.log(twoSum([1,4,5,6,12], 9))
// console.log(twoSum([1,4,5,6,12], 18))
// console.log(twoSum([100,42,53,612,120123], 665))



// const twoSum = (nums: number[], target: number): number[] => {
// 	// target value should be the sum of two values in the array -> return their indices
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length ; j++) {
// 					if (nums[j] + nums[i] === target) {
// 						return [i, j]
// 				}
// 			}
// 	}
// 	return []
// }

// console.log(twoSum([1,4,4,0,6,0,12], 0))

// can achieve less time complexity using a Hash table for storing key-value pairs of visited numbers and their indices

// interface HashMap {
// 	// indicates that Store is an object with any number of properties where keys and values are both integers/numbers
// 	[key: number]: number;
// }

const twoSumHash = (nums: number[], target: number): {} => {
	// target value should be the sum of two values in the array -> return their indices
	const store = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (store.has(complement)) {
			return [store.get(complement)!, i];
		}

		store.set(nums[i], i);
	}
	return []
}

console.log(twoSumHash([1,1,3,4,5,23,23], 28))

// -> this approach reduces time complexity from O(n^2) to O(n), but takes more memory