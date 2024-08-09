// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const maxSequence = function(arr) {
	// idea is to loop through the array and start a new subarray everytime the next int decreases the current sum
	// [1, -3, 4, 2, -3, 5, 8]
	// +1
	// +4 +2
	// +5 +8
	// need to be three subarrays at the end	
	// 13 -> [5, 8] highest subarray
	let sum = 0;
	let currentSum = 0;
	let subArray = [];

	for (let i = 0; i < arr.length; i++) {
		// 1
		if (arr[i] >= 0) {
			
		}
		currentSum += arr[i]; // 1

		// 1 < 0
		if (currentSum >= sum) {
			subArray.push(arr[i]);
			sum += currentSum;
		} else {
			sum = 0;
			subArray = [];
		}

		if (sum <= 0) {
			subArray = [];
			return 0;
		}



	}

	
}


const arrayTest = [1, -3, 4, 2, -3, 5, 8];

console.log(maxSequence(arrayTest));