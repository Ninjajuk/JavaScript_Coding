function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

// Example usage
const numbers = [4, 7, 10, 55, 12, 8];
const result = getEvenNumbers(numbers);
console.log("Even numbers:", result); // Output: Even numbers: [4, 10, 12, 8]


//Using Filter
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers(numbers))