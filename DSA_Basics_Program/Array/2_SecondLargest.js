//Example  finds the second largest number in an array.

const numbers = [1,2,4,7,10,55,-5]

//Normal Function
function findSecondLargest(arr) {
    if (arr.length < 2) return "Array should contain at least two elements";
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
const secondLarge = findSecondLargest(numbers);
console.log("Second largest number:", secondLarge);



// In buit method
const sortedArray = numbers.sort((a,b) => b-a)
console.log('Second Larges Element :',sortedArray[0])



 //In buit method Improved Version (Handles duplicates):
const uniqueSorted = [...new Set(numbers)].sort((a, b) => a - b);
const secondLargest = uniqueSorted[uniqueSorted.length - 2];
console.log('Second Largest Element:', secondLargest);