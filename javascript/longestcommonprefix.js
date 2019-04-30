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

Input: []
Output: ""


Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/


var longestCommonPrefix = function(strs) {
	
	if (strs.length  == 0) { return ""; }

	var first = strs[0];
	var second = strs.slice(1, strs.length);
	var common = "";
	var count = 0;
	while (count < first.length) {
		count++;
		var prefix = first.slice(0, count);
		if (prefixCheck(second, prefix)) {
			common = prefix;
		}
	}
	return common;
}


var prefixCheck = function(array, prefix) {
	var prefixLength = prefix.length;
	for (var i=0; i < array.length; i++) {
		var item = array[i];
		if (item.slice(0, prefixLength) !== prefix) {
			return false;
		}
	}
	return true;
}


console.log(longestCommonPrefix([]));