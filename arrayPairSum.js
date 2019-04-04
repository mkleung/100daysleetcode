/**

https://leetcode.com/problems/array-partition-i/

 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var n = nums.length / 2;
   	var result = 0;
    var arrayNums = nums;
    for (var i = 0; i < n; i++) {
	    var min = Math.min(...arrayNums);
	    var index = arrayNums.indexOf(min);
	    arrayNums.splice(index, 1)
	    ;
	    var min2 = Math.min(...arrayNums);
	    var index2 = arrayNums.indexOf(min2);
	    arrayNums.splice(index2, 1);

	    console.log(`${min}  ${min2}`);

	    result += min;
    }
    return result;
};

console.log(arrayPairSum([7,3,1,0,0,6]));