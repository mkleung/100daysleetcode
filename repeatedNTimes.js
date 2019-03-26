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
    var hashtable = [];
    var result = 0;
    for (var i = 0; i < A.length; i++) {	
    	if (hashtable[A[i]] == undefined) {
    		hashtable[A[i]] = 1;
    	}
    	else {
    		var num = hashtable[A[i]];
    		hashtable[A[i]] = num + 1;
    	}
    }

	//const key = Object.keys(hashMap).find(key => hashMap[key] === N);
    
    for (var key in hashtable) {
  		console.log(key, hashtable[key]);
		if (hashtable[key] == N) {
			result = key;
		}
	}

    return result;
};

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));