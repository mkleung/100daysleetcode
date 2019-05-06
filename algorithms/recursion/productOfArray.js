const productOfArray = function(arr) {
    if (arr.length === 0) {
       return [];
    }
    if (arr.length == 1) {
        return arr[0];
    }
	return arr[0] * productOfArray(arr.splice(1, arr.length));
}

productOfArray([1]);