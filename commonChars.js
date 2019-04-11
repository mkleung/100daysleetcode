/* https://leetcode.com/problems/find-common-characters/ */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var first = A[0].split("");
    var result = [];
  	for (var i = 0; i < first.length; i++) {
  		var count = 0;
  		for (var j = 1; j < A.length; j++) {
  			console.log(first[i] + " " + A[j].indexOf(first[i]));
  			if (A[j].indexOf(first[i]) >= 0) {
  				count++;
  			}
  		}
  		console.log("//////" + count)
  		
  	}

  	return result;

};

console.log(commonChars(["cool","lock","cook"]));