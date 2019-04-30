/**

https://www.youtube.com/watch?v=aVL9z3L-eRA


 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  
  var totalM = nums1.length - m;
  for (var i = 0; i < totalM; i++) {
      nums1.pop();
  }
  var totalN = nums2.length - n;
  for (var i = 0; i < totalN; i++) {
      nums2.pop();
  }
  nums1 = nums1.concat(nums2);
  return nums1.sort();
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);