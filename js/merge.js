/**

https://www.youtube.com/watch?v=aVL9z3L-eRA


 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    if (i < m) {
      result.push(nums1[i]);
    }
  }
  for (var j = 0; j < nums2.length; j++) {
      if (j < n) {
         result.push(nums2[j]);
      }  
  }

  nums1 = mergeSort(result);
  return nums1;
};



var mergeSortedArrays = function(arr1, arr2) {
    let sorted = [];
    let i = 0;
    let j = 0;
    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr2[j] > arr1[i]) {
          sorted.push(arr1[i]);
          i++;
        }
        else {
          sorted.push(arr2[j]);
          j++;
        }
    }
    if (arr1.length == i) {
        for (var k = j; k < arr2.length; k++) {
          sorted.push(arr2[k]);
        }
    }
    else {
        for (var k = i; k < arr1.length; k++) {
          sorted.push(arr1[k]);
        }
    }
    return sorted;
}

var mergeSort = function(arr) {
  if (arr.length <= 1)  return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
}


mergeSort([ 1, 2, 3, 2, 5, 6 ]);
//merge([1,2,3,0,0,0], 3, [2,5,6], 3);