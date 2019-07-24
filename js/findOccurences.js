/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {

    var arr = text.split(" ");
    var result = [];
    for (let i = 0; i < arr.length-2; i++) {
          var duo = arr[i] + " " + arr[i+1];
          if (duo == (first + " " + second)) {
              result.push(arr[i+2]);
          }
    }
    return result;
};

console.log(findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk"
,"lnlqhmaohv","ypkk"));