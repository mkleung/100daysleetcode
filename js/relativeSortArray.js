/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */


var relativeSortArray = function(arr1, arr2) {
    let sorted = [];
    for (let i = 0; i < arr2.length; i++) {
        
        var temp = [];
        temp.push(arr2[i]);
        
        for (let j = 0; j < arr1.length; j++) {
            if ((arr1[j] == arr2[i])) {
               temp.push(arr1[j]);
            }
        }
        if (temp.length > 1) {
            temp = temp.splice(1,temp.length);
        }
        for (let k = 0; k < temp.length; k++) {
            sorted.push(temp[k])
        }

    }

    let extra = [];
    for (let m = 0; m < arr1.length; m++) {
       if (!sorted.includes(arr1[m])) {
           extra.push(arr1[m]);
       }
    }
    extra.sort(function(a, b){return a-b});
   return sorted.concat(extra);
    
};

//relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);

relativeSortArray([28,6,22,8,44,17], [22,28,8,6] );