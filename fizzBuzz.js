/*
"Write a program that prints
the numbers from 1 to 100. But 
for multiples of three print “Fizz”
 instead of the number and for the
  multiples of five print “Buzz”. 

  For numbers which are multiples of both three
   and five print “FizzBuzz”."
*/



const fizzBuzz = () => {

	for (var i = 1; i <= 100; i++) {
		var num = "";
		if (i % 3 == 0) {
			num += "Fizz";
		}
		if (i % 5 == 0) {
			num += "Buzz";
		}

		if (num == "") {
			num = i;
		}
		console.log(num);
	}

}

fizzBuzz();