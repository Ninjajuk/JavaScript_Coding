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
