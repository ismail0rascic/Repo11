var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction() {
    var averageDayTemp = [];
    var averge = [];


    for (var i = 0; i < temps.length; i++) {

        averge[i] = 0;
        for (j = 0; j < temps[i].length; j++) {
            averge[i] = averge[i] + temps[i][j]

        }
        averageDayTemp.push(averge[i] / j);
    }
    return averageDayTemp;
}



console.log(myArrayFunction(temps));
myArrayFunction(temps);
module.exports = myArrayFunction;