function merge(arr1, arr2){
    let results = [];
    let i = 0;  //arr1 pointer
    let j = 0;  // arr2 pointer
    while ( i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length){
        results.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

mergeSort([3,6,1,2,7]);