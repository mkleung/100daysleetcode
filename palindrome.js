/*
|--------------------------------------------------------------------------
| https://leetcode.com/problems/reverse-integer/
|--------------------------------------------------------------------------
|


Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Input: 0
Output: true

Follow up:

Coud you solve it without converting the integer to a string?

Accepted

*/


var isPalindrome = function(x) {
    var y = x.toString();
    var palinArray = y.split("");
    var reverseArray = palinArray.slice().reverse();
    return (palinArray.join("") == reverseArray.join(""));
 }

console.log(isPalindrome(1010));
