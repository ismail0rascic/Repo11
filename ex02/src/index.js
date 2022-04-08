var myStr = "Paragon is the best!";

function useMethods(str) {

    var myReverse = str.split("").reverse().join("");
    return myReverse;

}


console.log(useMethods(myStr));
useMethods(myStr);
module.exports = useMethods();