/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    var result = [];
    var B = A;

    for (var i = 0; i < queries.length; i++) {
    	var index = queries[i][1];
    	var value = queries[i][0];

    	B[index] = B[index] + value;

    	var sum = 0;
    	for (var j = 0; j < B.length; j++) {
    		if (B[j] % 2 == 0) {
    			sum += B[j];
    		}
    	}
    	result.push(sum);
    }
    return result;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));