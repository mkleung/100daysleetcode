/**
https://leetcode.com/problems/flipping-an-image/

 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {

	return A.map(item => {
		return item.reverse().map(item2 => item2^1);
	});

	// var output = [];
	// for (var l = 0; l < A.length; l++) {
	// 	    var temp = A[l];
	// 	    var i = 0;
	// 	    var j = temp.length - 1;
	// 	    while (i < j) {
	// 	    	var a = temp[i];
	// 	    	var b = temp[j];
	// 	    	temp[i] = b;
	// 	    	temp[j] = a;
	// 	    	i++;
	// 	    	j--;
	// 	    }
	// 	    var result = [];
	// 	    for (var k = 0; k < temp.length; k++) {
	// 	    	if (temp[k] == 0) {
	// 	    		result.push(1);
	// 	    	}
	// 	    	if (temp[k] == 1) {
	// 	    		result.push(0);
	// 	    	}
	// 	    }
	// 	    output.push(result);
	// }
 //    return output;
};


console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));