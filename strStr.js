/*
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

*/



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

 	//return haystack.indexOf(needle);

 	for (var i = 0; i < haystack.length; i++) {
 		if (haystack.charAt(i) == needle.charAt(0)) {
 			if (haystack.substring(i, i + needle.length) == needle) {
 				return i;
 				
 			}
 		}
 	}

 	if (needle == "") {
 		return "";
 	}
 	else {
 		return -1;
 	}
};

console.log(strStr("", ""));