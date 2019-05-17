/*
Implement a function called areThereDuplicates which accepts a 
variable number of arguments and checks whether there are any
duplicats among the argumants passed in.

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2); // true
areThereDuplicates("a","b", "c","a"); // true

*/


function areThereDuplicates() {
    if (arguments.length <= 1) {
        return false;
    }
    var temp = {};
    for (var item of arguments) {
       temp[item] = (temp[item] || 0) + 1;
    }
   var arr = Object.values(temp);
   var sum = arr.reduce((partial_sum, a) => partial_sum + a,0);
   if (sum == arr.length) {
       return false
   }
   return true;
}



areThereDuplicates('a', 'b', 'c');