/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
*/

var numJewelsInStones = function(J, S) {
    
	var count = 0;
	var hashTable = [];
	var JArray = J.split("");
	var sArray = S.split("");
	for (var i = 0; i < JArray.length; i++) {
		hashTable[JArray[i]] = 0;
	}

	for (var j = 0; j < sArray.length; j++) {
		if (hashTable[sArray[j]] == 0) {
			count++;
		}
	}

    return count;
};

console.log(numJewelsInStones("z", "ZZ"));