/*
https://leetcode.com/problems/unique-email-addresses/

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
*/


/**
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function(emails) {

    var emailHash = [];

    for (var i = 0; i < emails.length; i++) {
    	var email = emails[i];
    	var local = email.substring(0, email.indexOf("@"));
   		var domain = email.substring(email.indexOf("@"), email.length);

   		if (local.indexOf("+") > -1) {
			var filteredLocal = local.substring(0, local.indexOf("+"));
   		}
   		else {
   			var filteredLocal = local;
   		}

		var filteredEmail = filteredLocal.replace(/\./g, "") + domain;

		emailHash[filteredEmail] = 1;
    }

  return Object.keys(emailHash).length;

};


// var numUniqueEmails = function(emails) {

//     var emailHash = [];

//     for (var i = 0; i < emails.length; i++) {
//     	var email = emails[i];
//     	var local = email.split("@")[0].replace(/\./g,"");
// 		var domain = "@" + email.split("@")[1];
    	
//     	var filteredLocal = local.split("+")[0];
//     	console.log(filteredLocal);

//     	emailHash[filteredLocal + domain] = 1;
//     }

//     return Object.keys(emailHash).length;

// };


console.log(numUniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"]));
//console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));
//console.log(numUniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"]));