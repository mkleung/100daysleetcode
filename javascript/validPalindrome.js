/**

https://leetcode.com/problems/valid-palindrome-ii/

 * @param {string} s
 * @return {boolean}
 */


/* Brute force O(n2) */
var validPalindrome = function(s) {
    var result = false;
    for (var i = 0; i < s.length; i++) {
        var modifiedString = s.slice(0,i) + s.slice(i+1, s.length);
        var reverseString = modifiedString.split("").reverse().join("");
        if (modifiedString == reverseString) {
          result = true;  
        }
    }
    return result;
};

validPalindrome("mahqqfovvbnuajlwabaqcoypsjzuzusmcmtqznsdbqklpiwusproqtyovorajdjdzwjzbezkzjggeolrysgicyfglbwfbfqfohcrvblmiiuctcjrkbodigihceefvfibltnxmgpehnkujexqusruphkbvourufwyszjfgmtqrnwdtxlwjptyzwdeareffcbltfbvfobvreujawbmwlrbblbbvfoeulfkhubxyqldedazjrhgoajkxajgioifleidfvxdarfwcouvghmnxponfshegkzheqngpiwihxfldknpyxnuocmbgtfhxevlxoyrqkwxipeantccxwnomwuclpuymhdwxwyfxqfykdjplnxjewmjzpujzmucptpwigsswoiizdpqaaamcuoafrsccaisrjmkfkbgrdreoyeumiamdldgnihztbzioqiovrcaspnongjaavcesyhnmrwthkmvkgprhihbzjtnkthnfoobafapzdsyjatwyzcafhpxhpjqhtqxlwzpnbnnqogccdpuaqgzipiabzefdnfkmfkhmgjucfvivkqxsbunqqncmvngdflslamdmsudtclscpnreaxgbmwbmwxzwpbyxrrfbecufkvmsymplixughgfyqzritbscbymyhltvczwxfbyrnbupsdcaafiuzgdxrilhczexicitubudkpjtsmhyfxzbdzuzvxnisgcshyaewdtxzextekyaogtxdcmzxgwbpidclruhspdnvzbijspiivjrbvlxqsvxbjmgdjbbkvkmrjbdsealwjgwhnogkujqnlxvdffhftprdvuosfgthynpzdidyllxyzpwpdiaqkwlgsjsahciqwpxyoxwtgkezdlfajhauoxmwmotlhvcmyrhqaymxbnhqpgcmjbeevygfcivelmzfjdoqywmwbardspgzocvmkwckzjvfwohbbslvmfvvwyouhyayunoaoofpfeeasxxbhqtlz");