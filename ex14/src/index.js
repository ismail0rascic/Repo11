var myArr = [2, 5, 9, 8, 1]


function bubbleSort(arr) {
    arr = myArr;
    for (var i = 0; i < arr.length; i++) {


        for (var j = 0; j < (arr.length - i - 1); j++) {


            if (arr[j] > arr[j + 1]) {

                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

console.log(bubbleSort());
bubbleSort();
module.exports = bubbleSort;