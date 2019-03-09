/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/


var twoSum = function(nums, target) {
    var result = [];
    var hashtable = [];
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        var diff = target - item;
        if (hashtable[diff] != undefined) {
            result.push(hashtable[diff], i);
        }
        hashtable[item] = i;
    }
    return result;
}

twoSum([3,2,4], 6);

// time: 72ms


// non hash method

// var twoSum = function(nums, target) {
//     var result = [];
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] == target) {
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// };

// console.log(twoSum([3,2,4], 6));

// Runtime: 140 ms