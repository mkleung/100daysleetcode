/*
Given two positive integers, find out if the two numbers have the same
frequency of digits

Your solution must have the following complexities 
Time O(n)

sameFrequency(182, 281); // true
sameFrequency(24,14); // false
sameFrequency(2589578, 5879385); // true
sameFrequency(22, 222); //false

*/

function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) {
        return false;
    }
    var arr1 = num1.toString().split("");
    var arr2 = num2.toString().split("");
    var numObject = {};
    for (let item of arr1) {
        numObject[item] = (numObject[item] || 0) + 1;
    }
    for (let item of arr2) {
        if (numObject[item] !== undefined) {
            numObject[item] = numObject[item] - 1;
        }
    }

    // get all values of numObject into array
    // add all values together
    if (Object.values(numObject).reduce((a, b) => a + b, 0) !== 0 ) {
        return false;
    }
    return true;
}

sameFrequency(22, 222);