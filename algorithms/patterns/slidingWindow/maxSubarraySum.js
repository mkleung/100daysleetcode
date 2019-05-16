/*
Write a function called maxSubArraySum whihc accepts an array
of integers and a number called n. The function should calculate
the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2); //10
maxSubarraySum([1,2,5,2,8,1,5],4); //17
maxSubarraySum([],4); // null
*/



function maxSubarraySum(arr, num){
   let maxSum = 0;
   let total = maxSum;
   for (var i = 0; i < num; i++) {
       maxSum += arr[i];
   }
   for (var j = num; j < arr.length; j++) {
       var sum = (maxSum + arr[j]) - arr[j - num];
       maxSum = sum;
     
       if (sum > total) {
           total = sum;
       }
   }
    return total;
}


maxSubarraySum([2,6,9,2,1,8,5,6,3],3);