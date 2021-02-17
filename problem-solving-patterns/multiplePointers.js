// finds the first pair of numbers in a sorted array that add up to zero
function sumZero(arr) {
    let left=0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}



/* CHALLENGE ALGORITHMS */

// function takes in a sorted array, counts the unique values in the array
/*
    [1, 1, 1, 1, 1, 2] = 2
    [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] = 7
    [] = 0
    [-2, -1, -1, 0, 1] = 4
*/

// my go at solving it
const countUniqueValues = arr => {
    let counter = 0

    let left = 0;
    let right = 1
    while (left < arr.length) {
        // if number at right index not equal to left, increment counter and set left index to current right index
        if (arr[right] !== arr[left]) {
            counter++
            left = right
        }

        // right index will always need to be icremented after checking for a match
        right++
    }

    return counter
}

// tests
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]) === 2) 
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7) 
console.log(countUniqueValues([]) === 0) 
console.log(countUniqueValues([-2, -1, -1, 0, 1]) === 4) 
