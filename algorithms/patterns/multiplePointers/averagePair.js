/*
Write a function called averagePair. Given a sorted array of integers
and a target averate, determine if there is a pair of values in there
array where the average of the pair equals the targe averate.

There may be more than one pair that matches the average target.

averagePair([1,2,3],2.5); // true
averagePair([1,3,3,5,6,7,10,12,19],8); // true
*/


function averagePair(arr, average) {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
       
       var a = ((arr[left] + arr[right])) / 2;
       if (a === average) {
           return true;
       } 
       else if (a < average) {
           left++;
       }
       else {
           right--;
       }  
    }
    return false;


}

averagePair([1,2,3,4],2.5);