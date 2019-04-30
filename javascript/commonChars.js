/* https://leetcode.com/problems/find-common-characters/ */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var first = A[0].split("");

    var result = [];
  	for (var i = 0; i < first.length; i++) {
  		var exists = true;

  		for (var j = 1; j < A.length; j++) {

  			if (A[j].indexOf(first[i]) < 0) {
  				exists = false;
  			}
  		}
  		
  		if (exists) {
  			result.push(first[i]);

	  		for (var j = 1; j < A.length; j++) {

	  			var temp = A[j].replace(first[i], "");
	  			A[j] = temp;
	  		}

  		}
  		
  	}

  	return result;

};

console.log(commonChars(["bella","label","roller"]));
console.log(commonChars(["cool","lock","cook"]));