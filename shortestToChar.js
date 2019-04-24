/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    var results = [];
    var stringArray = S.split("");
 
     var numC = S.split(C).length - 1;
      console.log(numC);
     var beforeFirstC = false;
     var afterLastC = false;
     var countC = 0;

    for (var i = 0; i < stringArray.length; i++) {
        var item = stringArray[i];
        var countLeft = 0;
        var countRight = 0;
       
       if (item == C) {
           beforeFirstC = true;
           countC++;
       }

       if (countC == numC) {
           afterLastC = true;
       }

       for (var j = i; j < stringArray.length; j++) {
            if (stringArray[j] == C) {
         
                break;
            }
            countRight++;
       }
        for (var k = i; k > 0; k--) {
            if (stringArray[k] == C) {
                break;
            }
            countLeft++;
        }

        console.log(i + " - " + item + " L:" + countLeft + " R:" + countRight + " - FE:" + beforeFirstC + " LE:" + afterLastC);

       
       if ((!beforeFirstC) && (!afterLastC)) {
           results.push(countRight);
       }

       if (beforeFirstC &&  !afterLastC) {
           results.push(Math.min(countLeft, countRight));
       }
        
       if ((afterLastC) && (beforeFirstC)) {
           results.push(countLeft);
       }
    }
    return results;
};

// shortestToChar("loveleetcode", "e");
shortestToChar("aaab", "b");