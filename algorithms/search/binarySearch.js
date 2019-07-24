/*
Write a function called binarySearch which accepts a sorted array
and a value and returns the index at which the value exists. Otherwise,
return -1

binarySearch([1,2,3,4,5], 2) // 1

BC: O(1)
WC: O(logn)
*/
// function binarySearch(arr, num) {
//     var left = 0;
//     var right = arr.length - 1;
//     var mid = Math.floor((left + right) / 2);
//     while (arr[mid] !== num && left <= right ) {
//        if (num < arr[mid]) {
//            right = mid - 1;
//        }
//        else {
//            left = mid + 1;
//        }
//         mid = Math.floor((left + right) / 2);
//     }
//     if (arr[mid] == num) {
//         return mid;
//     }
//     return -1;
// }


function binarySearch(arr, num) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            return mid;
        }
        else if (arr[mid] < num) {
            left = mid + 1;
        }
        else if (arr[mid] > num) {
            right = mid - 1;
        }
    }
    return -1;
}

binarySearch([1,2,3,4], 4);