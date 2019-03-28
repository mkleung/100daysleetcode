/**

https://leetcode.com/problems/hamming-distance/

 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

	var arrX = x.toString(2).split("");
	var arrY = y.toString(2).split("");

	if (arrX.length < arrY.length){
		var diff = arrY.length - arrX.length;
		for (var i = 0; i < diff; i++){
			arrX.unshift("0");
		}
	} else {
		var diff = arrX.length - arrY.length;
		for (var i = 0; i < diff; i++){
			arrY.unshift("0");
		}
	}

	var result = 0;
	for (var i=0; i< arrX.length; i++){
	 	if (arrX[i] !== arrY[i]) {
	 		result++;
	 	}
	 }
	 return result;
};

console.log(hammingDistance(4,1));