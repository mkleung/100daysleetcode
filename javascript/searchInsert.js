/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var index = nums.length;

    for (var i = 0; i < nums.length; i++) {
    	if (nums[i] == target) {
    		index = i;
    		break;
    	}
    	if (nums[i] > target) {
    		index = i ;
    		break;
    	}
    }
    return index;
};

console.log(searchInsert([1,3,5,6], 5));