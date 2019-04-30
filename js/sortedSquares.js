/*
https://leetcode.com/problems/squares-of-a-sorted-array/
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

*/


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    var result = [];
    for (var i = 0; i < A.length; i++) {

    	result.push(A[i] * A[i]);
    }
    result.sort(function(a, b){return a-b});

    return result;
};


console.log(sortedSquares([-4,-1,0,3,10]));