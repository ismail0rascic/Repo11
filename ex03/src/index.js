var myPetsArray = ["Dog", "Cat"];

function myArryFunction(myPets) {
    var myNewPets = myPets;
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion")

    return myNewPets;

}
console.log(myArryFunction(myPetsArray));
module.exports = myArryFunction;