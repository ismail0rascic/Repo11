function myReverse(str) {
    var str = "Paragon!";
    str = str;
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;


}
console.log(myReverse());
myReverse();
module.exports = myReverse;