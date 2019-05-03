/**
 * @param {number} num
 * @return {number}
 */

function addDigits(num) {
    if (num < 10){
        return num;
    }
    else {
        var resultArray = num.toString().split("");
        var total = 0;
        for (var i = 0; i < resultArray.length; i++) {
            total += parseInt(resultArray[i]);
        }
        if (total < 10) {
            return total;
        }
        return addDigits(total);
    }

}

addDigits(101);