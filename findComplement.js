/**

https://leetcode.com/problems/number-complement/submissions/

 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var binary = parseInt(num, 10);
    var binaryNum = binary.toString(2);

    var binaryArray = binaryNum.split("");
    for (var i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] > 0) {
            binaryArray[i] = "0";
        }
        else {
            binaryArray[i] = "1";
        }
    }

    return parseInt(binaryArray.join(""), 2);
};

findComplement(1);