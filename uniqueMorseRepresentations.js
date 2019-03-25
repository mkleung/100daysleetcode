/*
https://leetcode.com/problems/unique-morse-code-words/
*/





/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	var morseArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
	var morseHash = [];
	var c = 97;
	for (var i = 0; i < morseArray.length; i++) {
		morseHash[String.fromCharCode(c)] = morseArray[i];
		c++;
	}
	var hashResult = [];
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		var wordArray = word.split("");
		var morseResult = "";
		for (var j = 0; j < wordArray.length; j++) {
			morseResult += morseHash[wordArray[j]];
		}
		hashResult[morseResult] = word;
	}
	return Object.keys(hashResult).length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

//console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));