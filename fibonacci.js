/**

https://leetcode.com/problems/fibonacci-number/

 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N == 0) {
    	return 0;
    }
    else if (N == 1) {
    	return 1;
    }
    else {
    	return fib(N - 1) + fib(N - 2);
    }
};


console.log(fib(8));