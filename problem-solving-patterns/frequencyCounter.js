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