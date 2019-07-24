/*
Given a short string and a long string, find how many times
the short string can be found inside the long string


*/


function naiveStringSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        var subString = long.substr(i, short.length);
        if (subString == short) {
            count++;
        }
    }
    return count;
}


naiveStringSearch("hello world hello", "hello");