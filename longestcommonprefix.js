/*

Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/


// var longestCommonPrefix = function(strs) {
// 	if (strs.length  == 0) { return ""; }
// 	if (strs.length == 1) { return strs[0]; }

// 	var common = "";
// 	if (strs[0] == "") {
// 		return common;
// 	}
// 	else {
// 		var first = strs[0].split("");
// 	    strs.shift();
// 	    console.log(strs);
// 	    for (var i = 0; i < strs.length; i++) {
// 	    	var wordArray = strs[i].split("");
	    	

// 	    	if (wordArray[i] === first[i]) {
// 	    		common = common + wordArray[i];
// 	    		console.log(common);
// 	    	}
// 	    }
// 	    return common;
// 	}

// };

var longestCommonPrefix = function(strs) {

 

	var first = strs[0];
	var second = strs.slice(1, strs.length);

	var common = "";
	
	if (strs.length == 0) { return common; }
	if (strs.length == 1) { return first; }



	for (var i = 0; i < first.length; i++) {
	
		for (var j = 0; j < strs.length; j++) {
			var item = strs[j];

			if (item.charAt(i) == first.charAt(i)){
				common += first.charAt(i);
			}
		}
	}

	console.log(common);
		

}

longestCommonPrefix(["dog","dogman","d"]);