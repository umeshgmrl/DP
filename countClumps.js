/**
Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.
countClumps([1, 2, 2, 3, 4, 4]) → 2
countClumps([1, 1, 2, 1, 1]) → 2
countClumps([1, 1, 1, 1, 1]) → 1 */

function countClumps(nums) {
	let count = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] == nums[i + 1]) count++;
	}
	return count;
}
