/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var topRow = ["q","w","e","r","t","y", "u", "i", "o","p"];
    var midRow = ["a","s","d","f","g","h","j","k","l"];
    var botRow = ["z","x","c","v","b","n","m"];
    var results =  [];
    for (var j = 0; j < words.length; j++) {
       var item = words[j].toLowerCase();
       var wordsArray = item.split("");
       var topCount = 0;
       var midCount = 0;
       var botCount = 0;
       for (var i = 0; i < wordsArray.length; i++) {
            var character = wordsArray[i];
            if (topRow.includes(character)) {
               topCount++;
            }
            if (midRow.includes(character)) {
               midCount++;
            }
            if (botRow.includes(character)) {
               botCount++;
            }
        }
        if ((topCount == wordsArray.length) || (midCount == wordsArray.length) || (botCount == wordsArray.length)) {
            results.push(words[j]);
        }
    }
    return results;
};