  //#02 Write a JavaScript function to find the largest and smallest numbers in an array
  //Method 01 Without Using inBuilt
  function findMinMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

// Example usage:
const numbers = [4, 2, 7, 1, 9, 5];
const result = findMinMax(numbers);
console.log("Smallest number:", result.min);
console.log("Largest number:", result.max);

//Method 2 Using Method

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))