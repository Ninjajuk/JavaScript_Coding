
//Kth Smallest number 
function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Swap arr[i+1] and arr[high] (pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSelect(arr, low, high, k) {
    if (low <= high) {
        const partitionIndex = partition(arr, low, high);

        if (partitionIndex === k - 1) {
            return arr[partitionIndex];
        } else if (partitionIndex < k - 1) {
            return quickSelect(arr, partitionIndex + 1, high, k);
        } else {
            return quickSelect(arr, low, partitionIndex - 1, k);
        }
    }

    return undefined; // Return undefined if k is out of bounds
}

// Example usage:
const array = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 3;

const result = quickSelect(array, 0, array.length - 1, k);
console.log(`The ${k}th smallest number is: ${result}`);
