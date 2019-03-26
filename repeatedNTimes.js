/*
In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.


Example 1:

Input: [1,2,3,3]
Output: 3

*/


/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    var N = A.length / 2;
    var hashMap = [];
    var result = 0;
    for (var i = 0; i < A.length; i++) {	
    	if (hashMap[A[i]] == undefined) {
    		hashMap[A[i]] = 1;
    	}
    	else {
    		var num = hashMap[A[i]];
    		hashMap[A[i]] = num + 1;
    	}
    }

	const key = Object.keys(hashMap).find(key => hashMap[key] === N);
    return key;
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));