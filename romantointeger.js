
/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Input: "DCXXI"
Output: 621

*/




var romanToInt = function(s) {

	var integer = convert(s);
	integer = convert(integer);
	integer = convert(integer);
	integer = convert(integer);
    var intArray = integer.split("+");

    console.log(intArray);

   	var sum = 0;
	for (var i = 1; i < intArray.length; i++) {
	  sum += parseInt(intArray[i]);
	}
	
	return sum;
};


var convert = function(s) {

	    var integer = s.replace("IM", "+999");
    integer = integer.replace("CM", "+900");
    integer = integer.replace("M", "+1000");

    integer = integer.replace("ID", "+499");
    integer = integer.replace("CD", "+400");
    integer = integer.replace("D", "+500");

    integer = integer.replace("IC", "+99");
    integer = integer.replace("XC", "+90");
    integer = integer.replace("C", "+100");

    integer = integer.replace("IL", "+49");
    integer = integer.replace("XL", "+40");
    integer = integer.replace("L", "+50");

    integer = integer.replace("IX", "+9");
    integer = integer.replace("X", "+10");

    integer = integer.replace("IV", "+4");
    integer = integer.replace("V", "+5");
    
    integer = integer.replace("III", "+3");
    integer = integer.replace("II", "+2");
    integer = integer.replace("I", "+1");

	return integer;
}

console.log(romanToInt("DCXXXXI"));