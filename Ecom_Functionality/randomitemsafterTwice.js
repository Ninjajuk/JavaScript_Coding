// Original array with 12 items
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Function to get 8 random items from the original array
function getRandomItems(array, numberOfItems) {
    // Shuffle the array
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    // Return the first `numberOfItems` elements
    return shuffledArray.slice(0, numberOfItems);
}

// Function to show the random array
function showRandomArray() {
    const randomArray = getRandomItems(originalArray, 8);
    console.log("Random Array of 8 items:", randomArray);
}

// Counter to track the number of executions
let counter = 0;

// Set interval to run the function every 5 seconds
const intervalId = setInterval(() => {
    showRandomArray();
    counter++;
    
    // Clear the interval after the function has run twice
    if (counter === 2) {
        clearInterval(intervalId);
    }
}, 5000);

// Initial call to show the first random array immediately
showRandomArray();
counter++;




