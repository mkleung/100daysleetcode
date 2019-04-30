/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/



var mergeTwoLists = function(l1, l2) {

	var mergeList = l1.concat(l2);




    console.log(mergeList);
};

mergeTwoLists([1,2,4], [1,3,4]);