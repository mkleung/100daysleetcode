/**

https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/

 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    var arrayS = s.split(" ");
    var result = [];

    for (var i = 0 ; i < arrayS.length; i++) {
        result.push(arrayS[i].split("").reverse().join(""));   
    }
    return result.join(" ");
};

console.log(reverseWords("Let's take leetcode contest"));