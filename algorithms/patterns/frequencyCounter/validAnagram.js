/*
Given two strings, write a function to determine if the second strings
is an anagram of the first. An anagram is a word, phrase, or name
formed by rearranging the letters of another, such as cinema
formed from iceman
*/

// validAnagram('', '')  true
// validAnagram('aaz', 'zza') false
// validAnagram('rat', 'car') false
// validAnagram('awesome', 'awesom') false
// validAnagram('querty', 'qeywrt') true 

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    var arr1 = str1.split("");
    var arr2 = str2.split("");
    var a = {};
    var b = {};
    for (var item1 of arr1) {
        a[item1] = (a[item1] || 0) + 1;
    }
    for (var item2 of arr2) {
        b[item2] = (b[item2] || 0) + 1;
    }

    // Check if two objects are equivalent
    var aProps = Object.keys(a);
    for (var itemA of aProps) {
        if (a[itemA] !== b[itemA]) {
            return false;
        }
    }
    return true;
}

validAnagram('anagramam', 'nagaram');