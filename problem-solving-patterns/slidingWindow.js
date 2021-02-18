// function to find a sub array of length n with the largest value when adding it's items together
function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return null
    }

    let maxSum = 0
    
    // find sum of first possible array and set it to maxSum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }

    // iterate over rest of arr
    for (let i = n; i < arr.length; i++) {
        let tempSum = maxSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}


// tests 
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) == 25)