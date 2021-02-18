function insertionSort(arr) {
    // start at second item in array
    for (let i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        // iterate over array from item to sort, up until 0 spot or new item to compare to is smaller than current
        for (var j = i - 1; j >= 0 && arr[i] <= arr[j]; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j+1] = currentVal
    }

    return arr
}

function swap(arr, indx1, indx2){
    const temp1 = arr[indx2]
    const temp2 = arr[indx1]
    arr[indx1] = temp1
    arr[indx2] = temp2
}

const myArr = [2, 1, 9, 76, 4]

const result = insertionSort(myArr)

console.log(result)