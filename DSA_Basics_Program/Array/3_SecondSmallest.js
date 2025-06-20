const numbers = [4, 7, 10, 55];

function findSecondSmallest(arr) {
    if (arr.length < 2) return "Array should contain at least two elements";
    
    let smallest = arr[0];
    let secondSmallest = Infinity; // Infinity to handle initial comparisons

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) return "No second smallest element exists";
    return secondSmallest;
}

const secondsmallest = findSecondSmallest(numbers);
console.log("Second smallest number:", secondsmallest);