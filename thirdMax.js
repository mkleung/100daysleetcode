/**
https://leetcode.com/problems/third-maximum-number/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var first = Math.min(...nums);
    var second = Math.min(...nums);
    var third = Math.min(...nums);
 

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if ((num != first) && (num != second)  && (num != third)) {
            if (num > first) {
                third = second;
                second = first;
                first = num;
            }
            else {
                if (num > second){
                    third = second;
                    second = num;
                }
                else {
                    if (nums[i] >= third){
                        third = num;
                    
                    }
                   
                }
            }   
        }
    }

    console.log(first + " " + second + " " + third)
    
    if (second == third) {
        return first;
    }
        return third;
    
};

thirdMax([2,2,1]);