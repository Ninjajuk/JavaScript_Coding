//#01 Implement a function to reverse a string.

//Method 1 Function without using in-built method
function reverseString(inputString) {
    var reversedString = '';
        // Iterate through the characters of the input string in reverse order
    for (var i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];                 // Append each character to the reversed string
    }
    return reversedString;
  }
  // Example usage:
  var originalString = "SAMSU";
  var reversedResult = reverseString(originalString);
  console.log(reversedResult);

  //Method 2 Inbuillt
  const reversedString = str => str.split('').reverse().join('');
  console.log(reverseString("ANSARI"))


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


//Example #03