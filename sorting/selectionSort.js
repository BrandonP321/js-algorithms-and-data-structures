function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let minIndex = i

        for (let j = i; j < arr.length; j++) {
            // if item value is smaller than current min, swap their values
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }

        swap(arr, minIndex, i)
    }

    return arr
}

function swap(arr, indx1, indx2){
    const temp1 = arr[indx2]
    const temp2 = arr[indx1]
    arr[indx1] = temp1
    arr[indx2] = temp2
}

const myArr = [9, 5, 1, 8, 3, 7]

const result = selectionSort(myArr)

console.log(result)