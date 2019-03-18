
/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [1,1,2],
Return 2

*/

var removeDuplicates = function(nums) { 
	var i = nums.length;
	while (i--) {
		if (nums[i] == nums[i-1]) {
			nums.splice(i, 1)
		}
	}
	return nums.length;
};