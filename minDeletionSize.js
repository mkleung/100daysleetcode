/**

https://leetcode.com/problems/delete-columns-to-make-sorted/

 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {

	var result = 0;

	for (var i = 0; i < A[0].length; i++) {
		for (var j = 0; j < A.length - 1; j++) {
			if (A[j].charAt(i) > A[j+1].charAt(i)) {
				result++;
				break;
			}
		}
	}
	return result;
};

console.log(minDeletionSize(["cba","daf","ghi"]));