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


  
//Example #03 finds the second largest number in an array.

//Using Methods
const sorteddecarray=numbers.sort((a,b)=>b-a) //Sorting in decreasing order.Sorting method modify the original array
console.log('Second Largest Element is ',sorteddecarray[1])

//Normal Function
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should contain at least two elements";
    }

    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}
const secondLargest = findSecondLargest(numbers);
console.log("Second largest number:", secondLargest);

//Example #04 Check if a given string is a palindrome

//Methood 01
function isPalindrome(str) { 
    // let numberToString=str.toString()   // if asked to check numbers also
    return str === str.split('').reverse().join('') ? "Palindrome" : "Not a Palindrome";
}

// const palindrome = isPalindrome("SAMSU");
// console.log(palindrome);

//Method 02
function isPalindrome(str) {
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();

    // Remove non-alphanumeric characters
    let alphanumericStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            alphanumericStr += char;
        }
    }

    // Check if the alphanumeric string is a palindrome
    let left = 0;
    let right = alphanumericStr.length - 1;
    while (left < right) {
        if (alphanumericStr[left] !== alphanumericStr[right]) {
            return "Not a Palindrome";
        }
        left++;
        right--;
    }
    return "Palindrome";
}

// const palindrome = isPalindrome("SAMSU");
// console.log(palindrome);

//Example #05 array of numbers and returns a new array with only the even numbers.
//Method 01
// // const numbers = [4, 2, 7, 1, 9, 5];
// const newarrayWithEven=numbers.filter((item)=>item % 2 ===0)
// console.log(newarrayWithEven)

//Example #06 Calculate the factorial of a given number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

//Example #07 Find the largest element in a nested array.
function findLargestInNestedArray(arr) {
    let largest = Number.NEGATIVE_INFINITY;

    function findLargest(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                findLargest(arr[i]); // Recursively call findLargest for nested arrays
            } else {
                if (arr[i] > largest) {
                    largest = arr[i];
                }
            }
        }
    }

    findLargest(arr);
    return largest;
}

// Example usage:
const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8, 9]];
const largestElement = findLargestInNestedArray(nestedArray);
console.log("Largest element in the nested array:", largestElement);

//Example #08 Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
function fibonacciSequence(numTerms) {
    if (numTerms <= 0) {
        return "Number of terms should be greater than zero";
    }

    const sequence = [0, 1];

    for (let i = 2; i < numTerms; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

// Example usage:
const numTerms = 10;
const fibonacci = fibonacciSequence(numTerms);
console.log("Fibonacci sequence up to", numTerms, "terms:", fibonacci);

//Example 09 Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance.

function fibonacciMemoization(num, memo = {}) {
    if (num <= 0) {
        return "Number should be greater than zero";
    }

    if (num <= 2) {
        return Array.from({ length: num }, (_, i) => i);
    }

    if (memo[num]) {
        return memo[num];
    }

    memo[num] = fibonacciMemoization(num - 1, memo) + fibonacciMemoization(num - 2, memo);
    return memo[num];
}

// Example usage:
const num = 10;
const fibonacciSequence = Array.from({ length: num }, (_, i) => fibonacciMemoization(i));
console.log("Fibonacci sequence up to", num, "terms:", fibonacciSequence);


// Example 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
function toTitleCase(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // Convert the first character of each word to uppercase and concatenate it with the rest of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    // Join the words back into a single string with space separator
    return words.join(' ');
}

// Example usage:
const inputString = "hello world";
const titleCaseString = toTitleCase(inputString);
console.log("Title case:", titleCaseString);

//Example 11 Write a function that takes an array of integers as input and returns a new array with only the unique elements.
// function getUniqueElements(arr) {
//     const uniqueArray = [];

//     // Iterate through the input array
//     for (let i = 0; i < arr.length; i++) {
//         // Check if the current element is not already present in the uniqueArray
//         if (uniqueArray.indexOf(arr[i]) === -1) {
//             // If not present, push it to the uniqueArray
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray;
// }

// // Example usage:
// const inputArray = [1, 2, 3, 4, 2, 3, 5];
// const uniqueElements = getUniqueElements(inputArray);
// console.log("Unique elements:", uniqueElements);

//Method 2 
function getUniqueElements(arr) {
    // Create a new Set from the input array to remove duplicates
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array using the spread operator
    // or Array.from() method to get an array of unique elements
    const uniqueArray = [...uniqueSet]; // or Array.from(uniqueSet);

    return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 2, 3, 5];
const uniqueElements = getUniqueElements(inputArray);
console.log("Unique elements:", uniqueElements);

//Example 12 determines if a given number is prime or not.
// function isPrime(number) {
//     // Check if the number is less than 2
//     if (number < 2) {
//         return false;
//     }

//     // Iterate from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         // If the number is divisible by any number other than 1 and itself, it's not prime
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     // If the loop completes without finding a divisor, the number is prime
//     return true;
// }

// // Example usage:
// const num = 11;
// if (isPrime(num)) {
//     console.log(num + " is a prime number");
// } else {
//     console.log(num + " is not a prime number");
// }


////Example 13.	find the sum of all the numbers in an array.
// function sumOfArray(arr) {
//     let sum = 0;

//     // Iterate through the array and add each element to the sum
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const sum = sumOfArray(numbers);
// console.log("Sum of the numbers in the array:", sum);


//Example 14.Given a string, write a function to count the occurrences of each character in the string.
// function countCharacters(str) {
//     const charCount = {};

//     // Iterate through the string
//     for (let char of str) {
//         // If the character is already in the charCount object, increment its count
//         // Otherwise, initialize its count to 1
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     return charCount;
// }

// // Example usage:
// const string = "hello world";
// const charOccurrences = countCharacters(string);
// console.log("Occurrences of each character:", charOccurrences);


//Example 15.Implement a function to remove duplicates from an array
//Method 1 With new Set()
// const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
// const newArr=[...new Set(arrayWithDuplicates)]
// console.log(newArr)

//Method 2
// function removeDuplicates(arr) {
//     const uniqueArray = [];

//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {
//         // If the element is not already in the uniqueArray, add it
//         if (uniqueArray.indexOf(arr[i]) === -1) {
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray;
// }

// // Example usage:
// const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
// const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
// console.log("Array without duplicates:", arrayWithoutDuplicates);

// Example 16.Write a function that sorts an array of numbers in ascending order.
// const arrayWithDuplicates = [1, 4, 2, 3, 5];
//Method 1 with Inbuilt function
// const asending=arrayWithDuplicates.sort((a,b)=>a-b)   //Asending Order
// const desenedingOrder=arrayWithDuplicates.sort((a,b)=>b-a)   //Desending Order
// console.log(asending)
// console.log(desenedingOrder)

// Example-17.Implement a function that returns the average value of numbers in an array.
// function calculateAverage(arr) {
//     // Check if the array is empty
//     if (arr.length === 0) {
//         return "Array is empty";
//     }

//     let sum = 0;

//     // Iterate through the array and calculate the sum of all numbers
//     for (let num of arr) {
//         sum += num;
//     }

//     // Calculate the average by dividing the sum by the number of elements
//     const average = sum / arr.length;

//     return average;
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const average = calculateAverage(numbers);
// console.log("Average value:", average);


//Example 18.Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1.
// function findElementIndex(arr, target) {
//     // Iterate through the array
//     for (let i = 0; i < arr.length; i++) {
//         // Check if the current element is equal to the target element
//         if (arr[i] === target) {
//             // If found, return its index
//             return i;
//         }
//     }
//     // If the element is not found, return -1
//     return -1;
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const targetElement = 20;
// const index = findElementIndex(array, targetElement);
// console.log("Index of", targetElement, ":", index);

//Example 19.Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.

//Meyhod 01
// function removeFalsyValues(arr) {
//     // Use filter to create a new array containing only truthy values
//     return arr.filter(Boolean);
// }

// // Example usage:
// const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
// const filteredArray = removeFalsyValues(array);
// console.log("Array with falsy values removed:", filteredArray);
//Method 02
// function removeFalsyValues(arr) {
//     const truthyArray = [];

//     // Iterate through the input array
//     for (let i = 0; i < arr.length; i++) {
//         // Check if the current element is truthy
//         if (arr[i]) {
//             // If truthy, add it to the truthyArray
//             truthyArray.push(arr[i]);
//         }
//     }

//     return truthyArray;
// }

// // Example usage:
// const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];
// const filteredArray = removeFalsyValues(array);
// console.log("Array with falsy values removed:", filteredArray);


//Example 20 Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays.
// function groupElementsByCondition(arr, conditionFunc) {
//     const groups = {};

//     // Iterate through the array
//     for (let element of arr) {
//         // Evaluate the condition function for the current element
//         const conditionResult = conditionFunc(element);

//         // If the condition result is not a valid key in the groups object, initialize it as an empty array
//         if (!groups.hasOwnProperty(conditionResult)) {
//             groups[conditionResult] = [];
//         }

//         // Push the current element to the corresponding group array
//         groups[conditionResult].push(element);
//     }

//     return groups;
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const groupedNumbers = groupElementsByCondition(numbers, num => num % 2 === 0 ? 'even' : 'odd');
// console.log("Grouped numbers:", groupedNumbers);


//Example 21 Write a function that determines if two strings are anagrams of each other
// function areAnagrams(str1, str2) {
//     // Remove non-alphanumeric characters and convert both strings to lowercase
//     const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

//     // Sort the characters of both strings
//     const sortedStr1 = cleanStr1.split('').sort().join('');
//     const sortedStr2 = cleanStr2.split('').sort().join('');

//     // Check if the sorted strings are equal
//     return sortedStr1 === sortedStr2;
// }

// // Example usage:
// const string1 = "listen";
// const string2 = "silent";
// if (areAnagrams(string1, string2)) {
//     console.log(string1 + " and " + string2 + " are anagrams.");
// } else {
//     console.log(string1 + " and " + string2 + " are not anagrams.");
// }
