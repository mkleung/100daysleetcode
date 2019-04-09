/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
   
   var result = "";
   var count = 0;

   for (var i = 0 ; i < S.length; i++) {
   		if ((count == 0) || ( (count == 1) && (S[i] == ")"))) {
   		}
   		else {
   			result += S[i];
   		}
   		if (S[i] == "(") {
   			count++;
   		}
   		else {
   			count--;
   		}
   }
   return result;
};


console.log(removeOuterParentheses("(()())(())(()(()))"));
//console.log(removeOuterParentheses("(()())(())(()(()))"));