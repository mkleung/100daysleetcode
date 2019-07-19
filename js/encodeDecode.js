/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let hash = {};

var encode = function(longUrl) {
    var urlArray = longUrl.split("/");
    // hash
    for (let j = 0; j < urlArray.length; j++) {
        hash[j] = urlArray[j];
    }
   
    return "http://tinyurl.com/" + Object.keys(hash).join("-");
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var arr = shortUrl.split("/");
    var short = arr[arr.length-1];
    var result = "";
    var shortArray = short.split("-");
    for (let i = 0; i < shortArray.length; i++) {
        result += hash[shortArray[i]] + "/";
    }

    return result.substring(0, result.length - 1);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

let url = "http://www.example.com/book.aspx";
decode(encode(url));