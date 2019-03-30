/**

https://leetcode.com/problems/di-string-match/

 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
	
	var result = [];
	var countD = S.length;
	var countI = 0;

	for (var i = 0; i < S.length; i++){
	
		if (S[i] == "D") {
			result.push(countD);
			countD--;
		}
		else if (S[i] == "I") {
			result.push(countI);
			countI++;
		}
	}
	result.push(countI++);
    return result;
};

console.log(diStringMatch("DDI"));