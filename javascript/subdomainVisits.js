/*
https://leetcode.com/problems/subdomain-visit-count/
*/




/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var hashTable = {};
    var results = [];

    for (var i = 0; i < cpdomains.length; i++) {

    	var count = parseInt(cpdomains[i].split(" ")[0])
    	var domainString = cpdomains[i].split(" ")[1];

    	var domainArray = domainString.split(".");

    	if (domainArray.length == 3) {
    		var top = domainArray[2];
    		var second = domainArray[1] + "." + top;
    		var third = domainString;

    		hashTopVal = hashTable[top];
    		hashSecondVal = hashTable[second];
    		hashThirdVal = hashTable[third];

    		if (hashTopVal == undefined){
    			hashTable[top] =  count;
    		}
    		else {
    			hashTable[top] =  hashTopVal + count;
    		}

    		if (hashSecondVal == undefined){
    			hashTable[second] = count;
    		} else {
    			hashTable[second] = hashSecondVal + count;
    		}

    		if (hashThirdVal == undefined){ 
    			hashTable[third] =  count;
    		} else {
				hashTable[third] = hashThirdVal + count;
    		}
    	
    	} else if (domainArray.length == 2) {
    		var top = domainArray[1];
    		var second = domainString;
    		var hashTopVal = hashTable[top];
    		var hashSecondVal = hashTable[second];
    			if (hashTopVal == undefined){
    			hashTable[top] =  count;
    		}
    		else {
    			hashTable[top] =  hashTopVal + count;
    		}

    		if (hashSecondVal == undefined){
    			hashTable[second] = count;
    		} else {
    			hashTable[second] = hashSecondVal + count;
    		}
    	} else if (domainArray.length == 1){

    		hashTable[domainString] = count + hashTable.domainString;
    	}
    }


    Object.keys(hashTable).forEach(function (key) { 
    	var value = hashTable[key]
   		results.push(value + " " + key);
	})

    return results;
};


console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
//console.log(subdomainVisits(["9001 discuss.leetcode.com"]));