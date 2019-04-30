/**

https://leetcode.com/problems/single-number/

 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hashTable = {};
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        var key = nums[i];
        if (hashTable[key] != undefined) {
            var value = hashTable[key];
            hashTable[key] = value + 1;
        } else {
            hashTable[key] = 1;
        }
    }
    for  (var key in hashTable) {
        if (hashTable[key] == 1) {
            result = key;
        }
    }
    return result;
};

singleNumber([3,3,3,2,1]);