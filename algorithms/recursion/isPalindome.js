
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){

    if  (str.length < 2) {
        return true;
    }
    if (str.charAt(0) === str.charAt(str.length-1)) {

        var middle = str.substring(1, str.length-1);
        return isPalindrome(middle);
    }
    return false;
}

isPalindrome("amanaplanacanalpanama");