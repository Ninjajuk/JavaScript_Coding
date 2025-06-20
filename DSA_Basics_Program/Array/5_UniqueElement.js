


const num = [1,2,5,2,4,3]

// Method 1 with incudes
function getUniqueElements(arr) {
    const uniqueNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueNumbers.includes(arr[i])) {
            uniqueNumbers.push(arr[i]);
        }
    }
    return uniqueNumbers;
}

// Example usage
const numbers = [4, 7, 4, 10, 7, 55, 12, 8];
const result = getUniqueElements(numbers);
console.log("Unique numbers:", result); // Output: Unique numbers: [4, 7, 10, 55, 12, 8]


// Method 02 without any 
function getUniqueElements(arr) {
    const uniqueNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueNumbers.length; j++) {
            if (arr[i] === uniqueNumbers[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueNumbers.push(arr[i]);
        }
    }
    return uniqueNumbers;
}

// In built methods 03
console.log('unique numers: ', [...new Set(num)])