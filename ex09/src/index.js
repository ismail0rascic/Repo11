function myMutation(arr) {
    let bool;
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase().split('');
    for (let i = 0; i < secondWord.length; i++) {
        if (firstWord.indexOf(secondWord[i]) == -1) {
            bool = false;
            return bool;
        } else {
            bool = true;
        }
    }
    return bool;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voofoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;