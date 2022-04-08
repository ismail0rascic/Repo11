var monitorsListArry = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
    var monitorsList = [];
    for (var i = 0; i < arr.length; i++) {
        monitorsList.push([arr[i], i + 1]);

    }
    return monitorsList;

}
console.log(myMonitorsFunction(monitorsListArry));
myMonitorsFunction(monitorsListArry);
module.exports = myMonitorsFunction;