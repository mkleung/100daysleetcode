/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 
Example 1:

Input: "Hello"
Output: "hello"
*/





/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
 	var regex = /[A-Z]*/g;

 	return str.replace(regex,
 		u => u.toLowerCase());
}

toLowerCase("Hello");
//console.log(toLowerCase("Hello"));