/**

https://leetcode.com/problems/self-dividing-numbers/


 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = [];
    for (var i = left; i < right+1; i++) {
    	var numArray = i.toString().split("");
    	var selfDividing = true;
    	for (var j = 0; j  < numArray.length; j++) {
    		if  (i % numArray[j] != 0) {
    			selfDividing = false;
    		}
    	}
    	if (selfDividing) {
    		result.push(i);
    	}
    }
    return result;
};

console.log(selfDividingNumbers(1,22));