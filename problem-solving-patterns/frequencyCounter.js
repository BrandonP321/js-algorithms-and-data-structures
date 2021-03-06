function validAnagram(str1, str2) {
    // if strings are of different length, they can't match
    if (str1.length !== str2.length) {
        return false
    }

    // create objects to store frequency of letters in strings
    let str1Frequency = {}
    let str2Frequency = {}

    // iterate over str1
    for (let i = 0; i < str1.length; i++) {
        const char = str1[i]
        // increment frequency of char in object if exists, else create a new key with value of 1
        str1Frequency[char] = (str1Frequency[char] || 0) + 1
    }

    // iterate over str2
    for (let i = 0; i < str2.length; i++) {
        const char = str2[i]
        // increment frequency of char in object if exists, else create a new key with value of 1
        str2Frequency[char] = (str2Frequency[char] || 0) + 1
    }

    // iterate through keys in str1 object
    for (const char in str1Frequency) {
        if (!str2Frequency[char] || str2Frequency[char] !== str1Frequency[char]) {
            return false
        }
    }
    return true
}

// uses more code but has no nested loops and doesn't require sorting any arrays to increase efficiency



/* ANOTHER WAY TO SOLVE THIS */

function validAnagram2(str1, str2) {
    // if strings are different lengths, they can't match
    if (str1.length !== str2.length) {
        return false
    }

    // create object to store frequency of chars in str1
    const lookup = {}

    // iterate over str1
    for (const char of str1) {
        // increment char frequency in object if exists, else create a new key with value of 1
        lookup[char] = (lookup[char] || 0) + 1
    }

    // iterate over str2
    for (const char of str2) {
        // if char is not a property of lookup or has a value 0 (returns false), strings don't match
        if (!lookup[char]) {
            return false
        }
        // if char is in lookup, decrease that char frequency by 1
        lookup[char] -= 1
    }

    return true
}



// practice
function sameFrequency(num1, num2) {
    // convert each number to a string
    let str1 = num1.toString();
    let str2 = num2.toString();

    // if strings are of different length, they can not match
    if (str1.length !== str2.length) return false

    // create object to store frequencies of digits
    const lookup = {}

    // iterate over str1
    for (let digit of str1) {
        // increment digite frequency in obj if exists, else add digit to obj with value of 1
        lookup[digit] = (lookup[digit] || 0) + 1
    }

    // iterate over str2
    for (let digit of str2) {
        // if digit is not in lookup or has value of 0, return false
        if (!lookup[digit]) {
            return false
        }

        // else decrement value of digit in lookup
        lookup[digit] -= 1
    }

    return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))