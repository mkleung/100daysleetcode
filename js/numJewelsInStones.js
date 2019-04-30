/*

https://leetcode.com/problems/jewels-and-stones/

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
*/

var numJewelsInStones = function(J, S) {
    var total = 0;
    var hashTable = {};
    
    var JArray = J.split("");
    for (var i = 0; i < J.length; i++) {
        hashTable[J[i]] = 0; 
    }
    
    var SArray = S.split("");
    for (var j = 0; j < SArray.length; j++) {
        var item = SArray[j];
        
        if (hashTable[item] != undefined) {
            var hashValue = hashTable[item] + 1;
            hashTable[item] = hashValue;
        }
    }
    
    Object.keys(hashTable).forEach(function (key) { 
        var value = hashTable[key];
        total = total + value;
    })
    return total;

};

console.log(numJewelsInStones("z", "ZZ"));